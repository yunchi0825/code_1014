def on_gesture_logo_up():
    basic.show_number(1)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    basic.show_number(6)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_screen_down():
    basic.show_number(5)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_gesture_free_fall():
    basic.show_number(8)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_gesture_shake():
    basic.show_number(0)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_screen_up():
    basic.show_number(4)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_logo_down():
    basic.show_number(2)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_gesture_tilt_right():
    basic.show_number(7)
    basic.pause(100)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

input.calibrate_compass()

def on_forever():
    for y in range(5):
        for x in range(5):
            led.plot(x, y)
basic.forever(on_forever)
