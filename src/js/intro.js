import '../css/style.css'
import { Actor, Engine, Vector, Scene, Color, Label, Font, FontUnit, Text } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { ArrowTurret } from './arrowturret.js'
import { Enemy } from './enemy.js'
import { DroneBase, GunTurret, Castle } from './gunturret.js'
import { BombTurret } from './bombturret.js'
import { Wallpaper } from './wallpaper.js'
import { Bullet } from './bullet.js'

export class Intro extends Scene {
    constructor() {
        super({width:1280, height:720})
    }
    onInitialize() {
        let wallpaper = new Wallpaper();
        this.add(wallpaper)
        wallpaper.graphics.use(Resources.Intro.toSprite())
        this.pos = new Vector(640,360)
        wallpaper.on('pointerup', () => this.startGame())
    }
    startGame() {
        this.engine.goToScene('level')
    }
}