import { Actor, Color, Engine, Vector, Shape, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from './healthbar.js'
import { Enemy } from "./enemy.js"

export class Truck extends Enemy {
    constructor() {
        super()
    }
    onInitialize() {
        let sprite = Resources.Truck.toSprite()
        this.graphics.use(sprite)
        this.health = 100
        this.points = 100
        this.scaling = 100
    }

}