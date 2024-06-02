import { Actor, Color, Engine, Vector, Shape, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Bullet } from './bullet.js'
import { Enemy } from './enemy.js'

export class BombTurret extends Actor {

    currentUpgrade
    circle

    constructor(x,y) {
        super({radius: 0})
        this.currentUpgrade = 0
        this.pos = new Vector(x, y)
        let sprite = Resources.BombTurret.toSprite()
        this.graphics.use(sprite)
        this.on('pointerup', () => this.upgradeRadius())  
    }
    upgradeRadius(){
        this.currentUpgrade++

        if (this.currentUpgrade === 1) {
            if (this.scene.engine.scoring > 200) {
                this.circle = Shape.Circle(70)
                this.collider.set(this.circle)
                this.graphics.use(Resources.BombTurretUp1.toSprite())
                this.scene.engine.scoring -= 200
                this.scene.label.text = `Score: ${this.scene.engine.scoring}`
            } else {
                console.log("You don't have enough points to build")
            }
        } else if (this.currentUpgrade === 2) {
            if (this.scene.engine.scoring > 500) {
                this.circle = Shape.Circle(100)
                this.collider.set(this.circle)
                this.graphics.use(Resources.BombTurretUp2.toSprite())
                this.scene.engine.scoring -= 500
                this.scene.label.text = `Score: ${this.scene.engine.scoring}`
            } else {
                console.log("You don't have enough points to build")
            }
        } else if (this.currentUpgrade === 3) {
            if (this.scene.scoring > 1000) {
                this.circle = Shape.Circle(130)
                this.collider.set(this.circle)
                this.graphics.use(Resources.BombTurretUp3.toSprite())
                this.scene.engine.scoring -= 1000
                this.scene.label.text = `Score: ${this.scene.engine.scoring}`
            } else {
                console.log("You don't have enough points to build")
            }
        }
    }
    onInitialize(engine) {
        this.on('collisionstart', (event) => this.shootEnemy(event))
        this.on('collisionend', (event) => this.stopTimer(event))
    }
    shootEnemy(event) {
        if (event.other instanceof Enemy) {
            event.other.id = new Timer({
                fcn: () => this.shootBomb(event),
                interval: 500,
                repeats: true
            })
            this.scene.add(event.other.id)
            event.other.id.start()
        }
    }
    shootBomb(event){
        console.log("boom")
        let bullet = new Bullet(this.pos.x, this.pos.y + 15);
        let sprite = Resources.Bomb.toSprite()
        bullet.graphics.use(sprite)
        bullet.actions.meet(event.other, 50)
        this.scene.add(bullet)
        //bullet damage = high
        //interval speed = slow
    }
    stopTimer(event) {
        if (event.other instanceof Enemy) {
            event.other.id.stop()
        }
    }
}