# Untitled - By: thana - พ. ธ.ค. 29 2021

from machine import Timer,PWM
import sensor, image, time
from board import board_info
from Maix import GPIO

sensor.reset()
sensor.set_pixformat(sensor.RGB565)
sensor.set_framesize(sensor.QVGA)
sensor.skip_frames(time = 2000)

clock = time.clock()

tim = Timer(Timer.TIMER0, Timer.CHANNEL0, mode=Timer.MODE_PWM)
ch = PWM(tim, freq=50, duty=7.5, pin=9)
duty=7.5 #position0 #1.5/20*100
#duty=12.5 #position90 #2.5/20*100
#duty=2.5 #position-90 #0.5/20*100
ch.enable()
ch.duty(duty)

while(True):
    clock.tick()
    img = sensor.snapshot()
    print(clock.fps())
    ch.duty(duty)

