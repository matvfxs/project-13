led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P7, 0)
})
