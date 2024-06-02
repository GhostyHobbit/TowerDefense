import { Actor, Color, Engine, Vector, Shape, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './enemy.js'

export class Healthbar extends Actor {
    constructor(){
        super({x: -50, y: -40, color: Color.Red, width: 100, height: 10, anchor: new Vector (0, 0)})
    } 
    onInitialize() {

    }
}