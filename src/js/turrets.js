import { Actor, Color, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Turret extends Actor {
    constructor() {
        super()
    }
    onInitialize() {

    }
}

export class GunTurret extends Turret {
    constructor() {
        super()
        let sprite = Resources.GunTurret.toSprite()
        this.graphics.use(sprite)
    }
}
export class ArrowTurret extends Turret {
    constructor() {
        super()
        let sprite = Resources.ArrowTurret.toSprite()
        this.graphics.use(sprite)
    }
}