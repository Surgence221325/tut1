import Phaser from "phaser"

export default class GameOver extends Phaser.Scene

{
    /**
     * 
     * @param data {( leftScore: number, rightScore: number)}
     */
    create(data)
    {
        let titleText = "Game Over"
        if (data.leftScore > data.rightScore)
        {
            titleText = "You Win!"
        }

        this.add.text (400, 200, titleText)
        
    
        this.add.text(400, 300, "Press Space to cont" )

        this.input.keyboard.once('keydown-SPACE', ()=> {
        this.scene.start('titlescreen')})
    }
    
}