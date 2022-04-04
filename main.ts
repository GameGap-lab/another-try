input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 4; index++) {
        let Shut_Down = 0
        if (Shut_Down == 3) {
            music.setVolume(0)
        } else {
            music.playTone(262, music.beat(BeatFraction.Breve))
        }
    }
})
music.setVolume(255)
basic.forever(function () {
	
})
