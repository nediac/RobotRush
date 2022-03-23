basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 40) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
        } else if (mbit_Robot.Ultrasonic_Car() < 20) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
        }
    }
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 255)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
    basic.pause(2000)
})
