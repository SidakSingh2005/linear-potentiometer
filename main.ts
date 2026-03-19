let sensorValue = 0
let ledPosition = 0

basic.forever(function () {

    sensorValue = pins.analogReadPin(AnalogReadWritePin.P0)

    // map value to 0–4
    ledPosition = Math.map(sensorValue, 0, 1023, 0, 4)
    ledPosition = Math.round(ledPosition)

    // keep in range
    if (ledPosition < 0) {
        ledPosition = 0
    } else if (ledPosition > 4) {
        ledPosition = 4
    }

    basic.clearScreen()

    //  PROGRESS BAR STYLE 
    for (let i = 0; i <= ledPosition; i++) {
        led.plot(i, 2)
    }

    //  SOUND BASED ON POSITION
    let tone = Math.map(ledPosition, 0, 4, 200, 1000)
    music.playTone(tone, 50)

    basic.pause(80)
})