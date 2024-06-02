import { Actor, Color, Engine, Vector, Shape, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from './healthbar.js'
import { Enemy } from "./enemy.js"

export class Tank extends Enemy {
    constructor() {
        super()
    }
    onInitialize() {
        this.health = 200
        this.points = 200
        this.scaling = 200
    }

}