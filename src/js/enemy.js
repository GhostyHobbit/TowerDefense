import { Actor, Color, Engine, Vector, Shape, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from './healthbar.js'

export class Enemy extends Actor {

    bar
    health = 200
    scaling = 0
    points = 0

    constructor() {
        super({radius: 40})
        this.pos = new Vector(312, 800)
        let sprite = Resources.Enemy.toSprite()
        this.graphics.use(sprite)
        this.body.collisionType = CollisionType.Active
        this.bar = new Healthbar()
        this.addChild(this.bar)
        this.actions.moveTo(new Vector(312, 291), 40).moveTo(new Vector(95, 291), 40).moveTo(new Vector(95, 103), 40).moveTo(new Vector(902, 103), 40).moveTo(new Vector(900, 492), 40).moveTo(new Vector(755, 492), 40).moveTo(new Vector(755, 325), 40).moveTo(new Vector(508, 325), 40).moveTo(new Vector(508, 617), 40).moveTo(new Vector(1069, 617), 40).moveTo(new Vector(1069, -10), 40)
    }
    // onInitialize() {
    //     this.bar = new Healthbar()
    //     this.addChild(this.bar)
    //     this.actions.moveTo(new Vector(312, 291), 40).moveTo(new Vector(95, 291), 40).moveTo(new Vector(95, 103), 40).moveTo(new Vector(902, 103), 40).moveTo(new Vector(900, 492), 40).moveTo(new Vector(755, 492), 40).moveTo(new Vector(755, 325), 40).moveTo(new Vector(508, 325), 40).moveTo(new Vector(508, 617), 40).moveTo(new Vector(1069, 617), 40).moveTo(new Vector(1069, -10), 40)
    // }
    damageCount() {
        this.health = Math.max(0, this.health - 2)
        this.bar.scale = new Vector(this.health / this.scaling , 1)
        if (this.health <= 0) {
            this.actions.clearActions()
            this.bar.kill()
            this.pos.x = -100
            this.kill()
        }
    }
    onPreKill(){
        this.scene.engine.scoring += this.points
        this.scene.label.text = `Score: ${this.scene.engine.scoring}`
        console.log("weeee")
    }
}
