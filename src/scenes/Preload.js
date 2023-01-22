import Phaser from 'phaser'


import * as AudioKeys from '../consts/AudioKeys'
export default class Preload extends Phaser.Scene

{
    preload()
    {
        this.load.audio(AudioKeys.PongBeep, 'assets/pong.wav')
        this.load.audio(AudioKeys.PongPlop, 'assets/ping_pong_8bit_plop.wav')
    }
    create()
    {
        
    }
}