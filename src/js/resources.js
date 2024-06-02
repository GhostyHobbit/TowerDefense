import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { DroneBase } from './gunturret'

const Resources = {
    ArrowTurret: new ImageSource('images/arowturet.png'),
    ArrowTurretUp1: new ImageSource('images/arowturetupgrade.png'),
    ArrowTurretUp2: new ImageSource('images/arowturetupgrade2.png'),
    ArrowTurretUp3: new ImageSource('images/arowturetupgrade3.png'),
    GunTurret: new ImageSource('images/gunturet.png'),
    GunTurretUp1: new ImageSource('images/gunturetupgrade.png'),
    GunTurretUp2: new ImageSource('images/gunturetupgrade2.png'),
    GunTurretUp3: new ImageSource('images/gunturetupgrade3.png'),
    BombTurret: new ImageSource('images/bombturet.png'),
    BombTurretUp1: new ImageSource('images/bombturet.png'),
    BombTurretUp2: new ImageSource('images/bombturet.png'),
    BombTurretUp3: new ImageSource('images/bombturet.png'),
    DroneBase: new ImageSource('images/dronebase.png'),
    Castle: new ImageSource('images/castle.png'),
    Bullet: new ImageSource('images/bullet.png'),
    Arrow: new ImageSource('images/spear.png'),
    Bomb: new ImageSource('images/nuclear-bomb.png'),
    Enemy: new ImageSource('images/tank.png'),
    Truck: new ImageSource('images/military-truck.png'),
    Wallpaper: new ImageSource('images/newwallpaper.png'),
    Intro: new ImageSource('images/introscreen.png'),
    GameOver: new ImageSource('images/gameover.png'),
    GameWin: new ImageSource('images/winscreen.png')
}
const ResourceLoader = new Loader([
    Resources.ArrowTurret,
    Resources.ArrowTurretUp1,
    Resources.ArrowTurretUp2,
    Resources.ArrowTurretUp3,
    Resources.GunTurret,
    Resources.GunTurretUp1,
    Resources.GunTurretUp2,
    Resources.GunTurretUp3,
    Resources.BombTurret,
    Resources.BombTurretUp1,
    Resources.BombTurretUp2,
    Resources.BombTurretUp3,
    Resources.DroneBase,
    Resources.Castle,
    Resources.Bullet,
    Resources.Arrow,
    Resources.Bomb,
    Resources.Enemy,
    Resources.Truck,
    Resources.Wallpaper,
    Resources.Intro,
    Resources.GameOver,
    Resources.GameWin
])

export { Resources, ResourceLoader }