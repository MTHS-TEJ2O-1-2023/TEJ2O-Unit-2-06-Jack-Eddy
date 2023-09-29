/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Sep 2023
 * This program turns on and off an LED on a breadboard
*/

// Setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)

// Turn on LED
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

// Turn off LED
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})
