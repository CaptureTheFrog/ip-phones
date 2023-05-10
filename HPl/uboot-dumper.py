# snom300 uboot flash dumper
from hurry.filesize import size
import serial
import time
port_name = "COM9"

def bdinfo(serial_port):
    time.sleep(0.1);serial_port.reset_input_buffer()
    serial_port.write(b"bdinfo\r\n")
    
    buffer = {}
    while True:
        if serial_port.in_waiting:
            input_line = serial_port.readline().decode("utf-8").rstrip('\r\n').rstrip('\n')
            if input_line.strip() == "bdinfo":
                continue
            elif input_line.strip() == "INCA-IP-ROM #":
                time.sleep(0.1);serial_port.reset_input_buffer()
                return buffer
            key_value = input_line.split("=")
            buffer[key_value[0].strip()] = "=".join(key_value[1:]).strip()

def md(serial_port, address, size, print_progress=False):
    if type(address) == int:
        address_str = hex(address)
        address_int = address
    elif type(address) == str:
        address_str = address
        address_int = int(address, base=16)
    if type(size) == int:
        size_str = hex(size)
        size_int = size
    elif type(size) == str:
        size_str = size
        size_int = int(size, base=16)
    
    
    time.sleep(0.1);serial_port.reset_input_buffer()
    serial_port.write(f"md.b {address_str} {size_str}\r\n".encode('utf-8'))
    
    buffer = bytearray(size_int)
    pointer = address_int
    while True:
        if serial_port.in_waiting:
            rl = serial_port.readline()
            input_line = rl.decode("utf-8").rstrip('\r\n').rstrip('\n')
            print("*", input_line, "*")
            if input_line.startswith("md.b "):
                continue
            elif input_line.strip() == "INCA-IP-ROM #":
                time.sleep(0.1);serial_port.reset_input_buffer()
                return buffer
            line_parts = input_line.split("    ")[0].split(" ")
            start_pointer = int(line_parts[0].rstrip(':'), base=16)
            if start_pointer != pointer:
                raise Exception("Pointer mismatch when parsing hex dump")
                return None
            if print_progress:
                print(((pointer - address_int) / size_int) * 100, "%")
            for byt in line_parts[1:]:
                buffer[pointer - address_int] = int(byt, base=16)
                pointer += 1

print(f"Waiting for {port_name}...", end="")
serial_port = None
while serial_port is None:
    try:
        serial_port = serial.Serial(port_name, 115200, timeout=0.2)
    except serial.serialutil.SerialException:
        pass
print("done")

serial_port.write(b"\r\n") # send a newline to get a uboot shell at some point

print(f"Trying to get U-Boot shell...", end="")
while True:
    if serial_port.in_waiting:
        input_line = serial_port.readline().decode("utf-8").rstrip('\r\n').rstrip('\n')
        
        if input_line.startswith("Hit ENTER key to stop autoboot:"):
            serial_port.write(b"\r\n") # send a newline to stop autoboot
        elif input_line.strip() == "INCA-IP-ROM #":
            time.sleep(0.1);serial_port.reset_input_buffer()
            print("done")
            break

print(f"Querying board information...", end="")
board_info = bdinfo(serial_port)
print(board_info)
print("done")

print(f"Extracting flash information...", end="")
if not ("flashstart" in board_info and "flashsize" in board_info):
    print("error")
    print("Missing flashstart and/or flashsize!")
    print(board_info)
    serial_port.close()
    exit()
flashstart = int(board_info["flashstart"], base=16)
flashsize = int(board_info["flashsize"], base=16)
print("done,","flash is", size(flashsize))

print(f"Dumping flash...", end="")
file = open('nand.bin', 'wb')
for i in range(flashsize // 1024):
    file.write(md(serial_port, flashstart + i*1024, 1024, True))
file.close()
print("done")

serial_port.close()
