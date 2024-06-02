import { Actor, Color, Engine, Vector, Shape, Timer, CollisionType } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Bullet } from './bullet.js'
import { Enemy } from './enemy.js'
import { Healthbar } from './healthbar.js'

export class GunTurret extends Actor {

    currentUpgrade
    circle
    timer

    constructor(x,y) {
        super({radius: 0})
        this.currentUpgrade = 0
        this.pos = new Vector(x, y)
        let sprite = Resources.GunTurret.toSprite()
        this.graphics.use(sprite)
        this.on('pointerup', () => this.upgradeRadius())
    }
    upgradeRadius(){
        this.currentUpgrade++
        console.log("I am now level " + this.currentUpgrade)

        if (this.currentUpgrade === 1) {
            this.circle = Shape.Circle(80)
            this.collider.set(this.circle)
            this.graphics.use(Resources.GunTurretUp1.toSprite())
        } else if (this.currentUpgrade === 2) {
            if (this.scene.engine.scoring > 500) {
                this.circle = Shape.Circle(110)
                this.collider.set(this.circle)
                this.graphics.use(Resources.GunTurretUp2.toSprite())
                this.scene.engine.scoring -= 500
                this.scene.label.text = `Score: ${this.scene.engine.scoring}`
            } else {
                console.log("You don't have enough points to build")
            }
        } else if (this.currentUpgrade === 3) {
            if (this.scene.engine.scoring > 1000) {
                this.circle = Shape.Circle(140)
                this.collider.set(this.circle)
                this.graphics.use(Resources.GunTurretUp3.toSprite())
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
                fcn: () => this.shootGun(event),
                interval: 200,
                repeats: true
            })
            this.scene.add(event.other.id)
            event.other.id.start()
        }
    }
    stopTimer(event) {
        if (event.other instanceof Enemy) {
            event.other.id.stop()
        }
    }
    shootGun(event){
        console.log("fire")

        let bullet = new Bullet(this.pos.x, this.pos.y + 15);
        let sprite = Resources.Bullet.toSprite()
        bullet.graphics.use(sprite)
        bullet.actions.meet(event.other, 50)
        this.scene.add(bullet)
        //bullet damage = high
        //interval speed = slow
    }
}

export class DroneBase extends Actor {
    constructor() {
        super()
        let sprite = Resources.DroneBase.toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(515, 212)
    }
}
export class Castle extends Actor {

    bar
    health = 50

    constructor() {
        super({width: Resources.Castle.width, height: Resources.Castle.height})
        let sprite = Resources.Castle.toSprite()
        this.graphics.use(sprite)
        this.pos = new Vector(1145, 35)
        this.body.collisionType = CollisionType.Fixed
    }
    onInitialize() {
        this.bar = new Healthbar()
        this.addChild(this.bar)
        this.bar.pos.x = -100
        this.bar.pos.y = 50
        this.bar.scale = new Vector(2, 2)
        this.on('collisionstart', (event) => this.killEnemy(event))
        // this.bar.pos.x = new Vector()
    }
    killEnemy(event) {
        if (event.other instanceof Enemy) {
            this.health = Math.max(0, this.health - 10)
            this.bar.scale = new Vector(this.health / 250 , 2)
            event.other.kill()
            if (this.health <= 0) {
                this.scene.gameOver()
            }
        }
    }    
}