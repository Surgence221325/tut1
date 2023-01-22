import Phaser from "phaser"

export default class TitleScreen extends Phaser.Scene
{
   preload()
   {

   }

   create()
   {
    const text = this.add.text(400, 250, "To Pong?")
    text.setOrigin(0.5, 0.5)

    this.add.text(400, 300, 'Press Space to Start')
    text.setOrigin(0.5, 0.5)

    this.input.keyboard.once('keydown-SPACE', () =>
   { this.scene.start('game')

   })
   }

   
   

}