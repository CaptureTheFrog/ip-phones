# HPm user interface hijack remote control server
# Eddie Hart (c) April 2023

import pathlib
import tkinter as tk
import tkinter.ttk as ttk
import pygubu
import socket
from PIL import Image, ImageOps, ImageTk
import numpy
import threading
from time import sleep
import queue

request_queue = queue.Queue()
result_queue = queue.Queue()

command_queue = queue.Queue()

PROJECT_PATH = pathlib.Path(__file__).parent
PROJECT_UI = PROJECT_PATH / "gui.ui"


def submit_to_tkinter(callable, *args, **kwargs):
    request_queue.put((callable, args, kwargs))
    return result_queue.get()


t = None


def thread_gui():
    global app

    def timertick():
        try:
            callable, args, kwargs = request_queue.get_nowait()
        except queue.Empty:
            pass
        else:
            retval = callable(*args, **kwargs)
            result_queue.put(retval)

        app.mainwindow.after(100, timertick)

    app = RemoteControlServer()
    timertick()
    app.run()


def send_command(command):
    return lambda _: command_queue.put(command)


def on_hook_checkbox_change_helper(builder):
    if not builder.get_variable('isHookLocked').get():
        # hook locked
        # hook key press down
        builder.get_object("keyHook")['state'] = tk.DISABLED
        command_queue.put(b"dP")
    else:
        # hook unlocked
        # hook key press up
        builder.get_object("keyHook")['state'] = tk.NORMAL
        command_queue.put(b"uP")
    return None


def on_hook_checkbox_change(builder):
    return lambda _: on_hook_checkbox_change_helper(builder)

def on_passthru_checkbox_change_helper(builder):
    if not builder.get_variable('passthru').get():
        # keypad passthru on
        command_queue.put(b"=")
    else:
        # keypad passthru off
        command_queue.put(b"|")
    return None


def on_passthru_checkbox_change(builder):
    return lambda _: on_passthru_checkbox_change_helper(builder)

def on_freeze_checkbox_change_helper(builder):
    if not builder.get_variable('freeze').get():
        # freeze display
        command_queue.put(b"[")
    else:
        # unfreeze display
        command_queue.put(b"]")
    return None


def on_freeze_checkbox_change(builder):
    return lambda _: on_freeze_checkbox_change_helper(builder)


class RemoteControlServer:
    # based on pygubu helloworld gui example
    # https://github.com/alejandroautalan/pygubu-designer/blob/master/examples/helloworld/helloworld.py
    def __init__(self, master=None):
        # 1: Create a builder and setup resources path (if you have images)
        self.builder = builder = pygubu.Builder()
        builder.add_resource_path(PROJECT_PATH)

        # 2: Load an ui file
        builder.add_from_file(PROJECT_UI)

        # 3: Create the mainwindow
        self.mainwindow = builder.get_object('mainwindow', master)
        self.framebuffer = builder.get_object('framebuffer')
        print(type(self.framebuffer))
        self.fb_image = ImageTk.PhotoImage(Image.new(mode="RGB", size=(320, 240), color=(255, 0, 0)))
        self.image = self.framebuffer.create_image(2, 2, image=self.fb_image, anchor=tk.constants.NW)

        # 4: Connect callbacks
        builder.connect_callbacks(self)

        bindings = {f"key{str(x)}": str(x).encode() for x in range(10)} | \
                   {
                       "keyStar": b"*",
                       "keyPound": b"#",
                       "keyTransfer": b"t",
                       "keyVoicemail": b"v",
                       "keyRedial": b"r",
                       "keyPhonebook": b"p",
                       "keyHeadset": b"h",
                       "keySpeaker": b"s",
                       "keyMute": b"m",
                       "keyVolUp": b"+",
                       "keyVolDown": b"-",
                       "keyNavUp": b"^",
                       "keyNavDown": b"_",
                       "keyNavLeft": b"<",
                       "keyNavRight": b">",
                       "keyNavOK": b"y",
                       "keyNavBack": b"n",
                       "keyFunc1": b"I",
                       "keyFunc2": b"J",
                       "keyFunc3": b"K",
                       "keyFunc4": b"L",
                       "keyLine1": b"A",
                       "keyLine2": b"B",
                       "keyLine3": b"C",
                       "keyLine4": b"D",
                       "keyLine5": b"E",
                       "keyLine6": b"F",
                       "keyLine7": b"G",
                       "keyLine8": b"H",
                       "keyHook": b"P",
                   }
        for key, command in bindings.items():
            builder.get_object(key).bind('<ButtonPress-1>', send_command(command))
        builder.get_object("chkHookLock").bind('<Button-1>', on_hook_checkbox_change(builder))
        builder.get_object("chkPassthru").bind('<Button-1>', on_passthru_checkbox_change(builder))
        builder.get_object("chkFreeze").select()  # default to frozen display
        builder.get_object("chkFreeze").bind('<Button-1>', on_freeze_checkbox_change(builder))

    def run(self):
        self.mainwindow.mainloop()


def parse_image(buffer):
    # RGB565 to RGB888 conversion code by Scott David Daniels
    # https://stackoverflow.com/a/6434489
    # modified slightly

    shape = (240, 320)

    FROM_5 = ((numpy.arange(32, dtype=numpy.uint16) * 255 + 15) // 31).astype(numpy.ubyte)
    FROM_6 = ((numpy.arange(64, dtype=numpy.uint16) * 255 + 31) // 63).astype(numpy.ubyte)

    data = numpy.fromstring(buffer, dtype=numpy.uint16)
    r = Image.frombuffer('L', shape, FROM_5[data >> 11], 'raw', 'L', 0, 1)
    g = Image.frombuffer('L', shape, FROM_6[(data >> 5) & 0x3F], 'raw', 'L', 0, 1)
    b = Image.frombuffer('L', shape, FROM_5[data & 0x1F], 'raw', 'L', 0, 1)
    return ImageOps.flip(Image.merge('RGB', (r, g, b)).transpose(Image.ROTATE_90))


def recvall(sock):
    # This helper function is based on code by JadedTuna and trilobyte
    # https://stackoverflow.com/a/17697651/5232765

    BUFF_SIZE = 240 * 320 * 2
    data = b''
    while len(data) < BUFF_SIZE:
        part = sock.recv(BUFF_SIZE - len(data))
        data += part
    return data


def update_frame(image: Image):
    app.fb_image = ImageTk.PhotoImage(image)
    app.framebuffer.itemconfig(app.image, image=app.fb_image)


def thread_control_server():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("0.0.0.0", 7301))
        s.listen()
        conn, addr = s.accept()
        with conn:
            print(f"Connected by {addr}")
            while True:
                conn.sendall(command_queue.get())


if __name__ == '__main__':
    threading.Thread(target=thread_gui).start()
    threading.Thread(target=thread_control_server).start()
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("0.0.0.0", 7302))
        s.listen()
        conn, addr = s.accept()
        with conn:
            print(f"Connected by {addr}")
            while True:
                data = recvall(conn)
                if not data:
                    break
                submit_to_tkinter(update_frame, parse_image(data))
