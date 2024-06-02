import { Actor, Color, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Wallpaper extends Actor {
    constructor() {
        super({width:1280, height:720})
        let sprite = Resources.Wallpaper.toSprite()
        this.graphics.use(sprite)
    }
    onInitialize() {
        this.pos = new Vector(640,360)
        // this.scale = new Vector (2.5, 2.5)
    }

}