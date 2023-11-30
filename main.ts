input.onButtonPressed(Button.A, function () {
    basic.showNumber(5)
    basic.pause(500)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showString("Roel")
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(4)
    basic.pause(500)
})
basic.forever(function () {
	
})
