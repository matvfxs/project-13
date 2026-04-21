led.enable(False)

def on_forever():
    pins.digital_write_pin(DigitalPin.P3, 1)
    pins.digital_write_pin(DigitalPin.P7, 0)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P4, 1)
    pins.digital_write_pin(DigitalPin.P3, 0)
    basic.pause(1000)
    pins.digital_write_pin(DigitalPin.P4, 1)
basic.forever(on_forever)
