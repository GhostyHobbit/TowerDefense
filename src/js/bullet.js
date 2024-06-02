import { Actor, Color, Engine, Vector, Shape, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from './enemy.js'
import { Healthbar } from './healthbar.js'

export class Bullet extends Actor {
    constructor(x, y) {
        super({
            x, 
            y, 
            width: Resources.Arrow.width, 
            height: Resources.Arrow.height,
        }) 
        let sprite = Resources.Bullet.toSprite()
        this.graphics.use(sprite)
        this.vel = new Vector(10, 50)
        // this.body.collisionType = CollisionType.Active
    }
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.enemyHit(event))
    }
    enemyHit(event) {
        if (event.other instanceof Enemy) {
            this.kill()
            event.other.damageCount()
        }
    }
}