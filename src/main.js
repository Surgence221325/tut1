import Phaser from "phaser"

import TitleScreen from "./scenes/TitleScreen"
import Game from "./scenes/Game"
import GameBackground from "./scenes/GameBackground"
import GameOver from "./scenes/GameOver.Js"

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    //backgroundColor: '#616161',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add('titlescreen', TitleScreen)
game.scene.add("game", Game)
game.scene.add('game-background', GameBackground)
game.scene.add('game-over', GameOver)

game.scene.start('titlescreen')
//game.scene.start('game')