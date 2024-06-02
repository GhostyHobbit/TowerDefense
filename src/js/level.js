import '../css/style.css'
import { Actor, Engine, Vector, Scene, Color, Label, Font, FontUnit, Text, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { ArrowTurret } from './arrowturret.js'
import { Enemy } from './enemy.js'
import { Truck } from './truck.js'
import { Tank } from './tank.js'
import { DroneBase, GunTurret, Castle } from './gunturret.js'
import { BombTurret } from './bombturret.js'
import { Wallpaper } from './wallpaper.js'
import { Bullet } from './bullet.js'

export class Level extends Scene {
    constructor() {
        super({ width: 1280, height: 720 })
    }
    onInitialize() {
        this.engine.scoring = 60000
        this.createWallpaper()
        console.log("start de game!")
        this.createArrowTurret(826, 201)
        this.createArrowTurret(827, 364)
        this.createArrowTurret(985, 202)
        this.createArrowTurret(984, 338)
        this.createArrowTurret(987, 481)
        this.createArrowTurret(1165, 480)
        this.createArrowTurret(1164, 340)
        this.createArrowTurret(1163, 204)
        this.createArrowTurret(1166, 607)

        this.createGunTurret(184, 199)
        this.createGunTurret(221, 384)
        this.createGunTurret(110, 384)
        this.createGunTurret(407, 384)
        this.createGunTurret(408, 522)
        this.createGunTurret(222, 523)
        this.createGunTurret(600, 521)
        this.createGunTurret(664, 419)

        this.createBombTurret(101, 22)
        this.createBombTurret(359, 23)
        this.createBombTurret(625, 22)
        this.createBombTurret(891, 22)
        this.createBombTurret(517, 698)
        this.createBombTurret(799, 698)
        this.createBombTurret(1069, 699)

        let drone = new DroneBase;
        this.add(drone)
        let castle = new Castle;
        this.add(castle)

        this.enemyWave()
        let timer = new Timer({
            fcn: () => this.enemyWave(),
            interval: 60000,
            repeats: true
        })
        this.add(timer)
        timer.start()
    
        this.label = new Label({
            text: "0",
            pos: new Vector(50, 650),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.label)
        this.label.text = `Score: ${this.engine.scoring}`
    }
    addPoint() {
        this.scoring = this.scoring + 100
        this.label.text = `Score: ${this.scoring}`
    }
    createWallpaper() {
        let wallpaper = new Wallpaper();
        this.add(wallpaper)
    }
    createArrowTurret(x, y) {
        let turret = new ArrowTurret(x, y);
        this.add(turret)
    }
    createGunTurret(x, y) {
        let turet = new GunTurret(x, y);
        this.add(turet)
    }
    createBombTurret(x, y) {
        let turrret = new BombTurret(x, y);
        this.add(turrret)
    }
    enemyWave() {
        for (let i = 0; i < 5; i++) {
            let testtimer = new Timer({
                fcn: () => this.createEnemy(),
                interval: 4000 * i,
                repeats: false
            })
            this.add(testtimer)
            testtimer.start()
        }
        for (let i = 0; i < 5; i++) {
            let testimer = new Timer({
                fcn: () => this.createTruck(),
                interval: 2000 * i,
                repeats: false
            })
            this.add(testimer)
            testimer.start()
        }
    }
    createEnemy() {
        let enemy = new Tank();
        this.add(enemy)
    }
    createTruck() {
        let truck = new Truck();
        this.add(truck)
    }
    gameOver() {
        this.engine.goToScene('gameover')
    }
}