# Raspberry Pi Pico USB to inverted UART adapter
# Eddie Hart (c) March 2023

from machine import UART, Pin
import sys,uselect
spoll=uselect.poll()
spoll.register(sys.stdin,uselect.POLLIN)

def read():
    return(sys.stdin.read(1) if spoll.poll(0) else None)

uart1 = UART(1, baudrate=115200, tx=Pin(4), rx=Pin(5), invert=UART.INV_TX | UART.INV_RX)

while True:
    r = uart1.read(1)
    if r:
        sys.stdout.buffer.write(r)
    w = read()
    if w:
        uart1.write(w)