input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(1)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(6)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(5)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showNumber(8)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(4)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(2)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(7)
    basic.pause(100)
    basic.clearScreen()
})
input.calibrateCompass()
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, y)
            basic.pause(100)
        }
    }
})
