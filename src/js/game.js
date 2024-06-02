//Tower defense
//Square -> shooting tower, mid range, mid speed, mid damage
//Half square -> bomb tower, mid range, low speed, high damage
//Circle -> arrow tower, low range, high speed, mid damage
//Command Centre -> upgrade to upgrade range???

import '../css/style.css'
import { Actor, Engine, Scene, Vector, Color, Label, Font, FontUnit, Text, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { ArrowTurret } from './arrowturret.js'
import { Enemy } from './enemy.js'
import { DroneBase, GunTurret, Castle } from './gunturret.js'
import { BombTurret } from './bombturret.js'
import { Wallpaper } from './wallpaper.js'
import { Level } from './level'
import { Intro } from './intro'
import { GameWin } from './gamewon'
import { GameOver } from './gameover'

export class Game extends Engine {

    scoring = 0

    constructor() {
        super({ 
            width: 1280, 
            height: 720,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 0)
            }  
        })
        this.showDebug(false)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('intro', new Intro())
        this.add('level', new Level())
        this.add('gameover', new GameOver())
        this.add('gamewin', new GameWin())
        this.goToScene('intro')
    }
}

new Game()
