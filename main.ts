basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        if (index == 5) {
            break;
        }
    }
    basic.showIcon(IconNames.Heart)
})
