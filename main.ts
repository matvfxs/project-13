led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P7, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
})
