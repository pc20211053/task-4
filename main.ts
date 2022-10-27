let y_value = 0
let x_value = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        y_value += 1
        led.plot(x_value, y_value)
        basic.pause(200)
    }
    if (y_value > 4) {
        y_value = -1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        x_value += 1
        led.plot(x_value, y_value)
        basic.pause(200)
    }
    if (x_value > 4) {
        x_value = -1
    }
})
