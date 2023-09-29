"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *


display.clear()
display.show(Image.YES)

while True:
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(Image.YES)
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(Image.NO)
