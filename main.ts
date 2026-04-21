led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P4, 1)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
})
