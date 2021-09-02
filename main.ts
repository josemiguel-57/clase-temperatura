basic.forever(function () {
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showString("\"T.ALTA\"")
    }
    while (input.temperature() < 26) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("\"T.BAJA\"")
        basic.showNumber(input.temperature())
        basic.showString("\"T.NORMAL\"")
    }
})
