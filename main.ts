enum ActionKind {
    Right,
    Up,
    Down,
    Left,
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const HItbox = SpriteKind.create()
    export const HitBox2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.HItbox, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 882, 170, 255, 0, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    P1Health.value += -1
    sprite.setVelocity(0, 0)
    sprites.destroy(sprite, effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Wall, function (sprite, otherSprite) {
    if (gameStart == 1) {
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.fire, 200)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.HitBox2, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 882, 170, 255, 0, 400, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    P2Health.value += -1
    sprite.setVelocity(0, 0)
    sprites.destroy(sprite, effects.fire, 200)
})
sprites.onOverlap(SpriteKind.HitBox2, SpriteKind.Wall, function (sprite, otherSprite) {
    if (Direction2 == 0) {
        Player22.x += -1
    } else if (Direction2 == 1) {
        Player22.y += -1
    } else if (Direction2 == 2) {
        Player22.y += 1
    } else if (Direction2 == 3) {
        Player22.x += 1
    }
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.HItbox, SpriteKind.Wall, function (sprite, otherSprite) {
    if (gameStart == 1) {
        if (Direction == 0) {
            Player1.x += -1
        } else if (Direction == 1) {
            Player1.y += -1
        } else if (Direction == 2) {
            Player1.y += 1
        } else if (Direction == 3) {
            Player1.x += 1
        }
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    connected = 1
    mySprite2.setImage(assets.image`myImage7`)
    anim2 = animation.createAnimation(ActionKind.Walking, 100)
    anim2.addAnimationFrame(assets.image`myImage7`)
    anim2.addAnimationFrame(assets.image`myImage9`)
    anim2.addAnimationFrame(assets.image`myImage8`)
    anim2.addAnimationFrame(assets.image`myImage10`)
    animation.attachAnimation(mySprite2, anim2)
    animation.setAction(mySprite2, ActionKind.Walking)
    mySprite4 = sprites.create(assets.image`myImage11`, SpriteKind.Player)
    mySprite4.setPosition(mySprite.x, 111)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Wall, function (sprite, otherSprite) {
    if (gameStart == 1) {
        sprite.setVelocity(0, 0)
        sprites.destroy(sprite, effects.fire, 200)
    }
})
let Crate: Sprite = null
let P2Left: animation.Animation = null
let P2Down: animation.Animation = null
let P2Up: animation.Animation = null
let P2Right: animation.Animation = null
let P1Left: animation.Animation = null
let P1Down: animation.Animation = null
let P1Up: animation.Animation = null
let P1Right: animation.Animation = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let redProjectile: Sprite = null
let blueProjectile: Sprite = null
let mySprite4: Sprite = null
let anim2: animation.Animation = null
let Player1: Sprite = null
let Direction = 0
let Player22: Sprite = null
let Direction2 = 0
let P2Health: StatusBarSprite = null
let gameStart = 0
let P1Health: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let connected = 0
connected = 0
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffdd
    ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffff
    fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    ffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
    fffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
    fffffffdddddddddddddddddddddddddddddddddfffddddddddddddddddddddddddddddddddddddddddfffffffffdddddddddddddddddddddddddddddddddddddddddddddffeeeeeeeeeeeeeffffffff
    fffffffddddddddddddddddddddddddddddddfffffffdddddddddddddddddddddddddddddddddddddddffffffffffddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeefffffff
    fffffffddddddddddddddddddddddddddddfffffffffdddddddddddddddddddddddddddddddddddddddffffffffffdddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffddddddddddddddddddddddddddffffffffffffddddddddddddddddddddddddddddddddddddddfffffffffffdddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffdddddddddddddddddddddddddfffffffffffffdddddddddddddddddddddddddddddddddddddffffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffddddddddddddddddddddddddffffffffffffffddddddddddddddddddddddddddddddddddddfffffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffdddddddeeeeeddddddddddddffffffffffffffddddddddddddddddddddddddddddddddddddfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffdddddeeeeeeeedddddddddddffffffffffffffddddddddddddddddddddddddffdddddddddffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffddeeeeeeeeeeedddddddddddfffffffffffffffddddddddddddddddddddddfffffffddddfffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffeeeeeeeeeeeeeddddddddddffffffffffffffffdddddddddddddddddddddffffffffffddfffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffeeeeeeeeeeeeeddddddddddffffffffffffffffdddddddddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffffeeeeeeeeeeeeeedddddddddffffffffffffffffdddddddddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffffeeeeeeeeeeeeeeeedddddddddffffffffffffffffddddddddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    ffffeeeeeeeeeeeeeeeeeddddddfffffffffffffffffffddddddddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    ffffeeeeeeeeeeeeeeeeefffffffffffffffffffffffffddfffdddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffddffffddddddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff
    fffeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffdddddddddddddffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
    ffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffddddddddddddffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
    ffeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
    feeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
    feeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff
    feeeeeeeeeeeeeeeeeeeeffffffffffffeeeeeffffffffffffffffdddddddddddffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff
    eeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeffffffffffffffdddddddddddfffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeffffffffffffffddddddddddffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeffffffffffffffffffffffdffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
let menuRed = sprites.create(assets.image`myImage`, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`myImage6`, SpriteKind.Player)
mySprite3.setPosition(mySprite3.x, 40)
menuRed.setPosition(30, 85)
let anim = animation.createAnimation(ActionKind.Walking, 100)
anim.addAnimationFrame(assets.image`myImage`)
anim.addAnimationFrame(assets.image`myImage0`)
anim.addAnimationFrame(assets.image`myImage1`)
anim.addAnimationFrame(assets.image`myImage2`)
animation.attachAnimation(menuRed, anim)
animation.setAction(menuRed, ActionKind.Walking)
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
mySprite.setPosition(mySprite.x, 85)
mySprite2 = sprites.create(assets.image`myImage4`, SpriteKind.Player)
mySprite.setPosition(mySprite.x, 85)
mySprite2.setPosition(135, 85)
forever(function () {
    if (gameStart == 1) {
        if (controller.player2.isPressed(ControllerButton.A)) {
            if (gameStart == 1) {
                music.play(music.createSoundEffect(WaveShape.Noise, 4268, 1346, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                if (Direction2 == 0) {
                    blueProjectile = sprites.createProjectileFromSprite(assets.image`RedProj2`, Player22, 200, 0)
                    blueProjectile.x += 8
                } else if (Direction2 == 1) {
                    blueProjectile = sprites.createProjectileFromSprite(assets.image`RedProj1`, Player22, 0, 200)
                    blueProjectile.y += 8
                } else if (Direction2 == 2) {
                    blueProjectile = sprites.createProjectileFromSprite(assets.image`RedProj1`, Player22, 0, -200)
                    blueProjectile.y += -8
                } else if (Direction2 == 3) {
                    blueProjectile = sprites.createProjectileFromSprite(assets.image`RedProj2`, Player22, -200, 0)
                    blueProjectile.x += -8
                }
                blueProjectile.setKind(SpriteKind.Projectile2)
            }
            pause(500)
        }
    }
})
forever(function () {
    if (gameStart == 1) {
        if (controller.player1.isPressed(ControllerButton.Right)) {
            Direction = 0
            animation.setAction(Player1, ActionKind.Right)
            Player1.x += 1
        } else if (controller.player1.isPressed(ControllerButton.Down)) {
            Direction = 1
            animation.setAction(Player1, ActionKind.Down)
            Player1.y += 1
        } else if (controller.player1.isPressed(ControllerButton.Up)) {
            Direction = 2
            animation.setAction(Player1, ActionKind.Up)
            Player1.y += -1
        } else if (controller.player1.isPressed(ControllerButton.Left)) {
            Direction = 3
            animation.setAction(Player1, ActionKind.Left)
            Player1.x += -1
        } else {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player1)
        }
        if (controller.player2.isPressed(ControllerButton.Right)) {
            Direction2 = 0
            animation.setAction(Player22, ActionKind.Right)
            Player22.x += 1
        } else if (controller.player2.isPressed(ControllerButton.Down)) {
            Direction2 = 1
            animation.setAction(Player22, ActionKind.Down)
            Player22.y += 1
        } else if (controller.player2.isPressed(ControllerButton.Up)) {
            Direction2 = 2
            animation.setAction(Player22, ActionKind.Up)
            Player22.y += -1
        } else if (controller.player2.isPressed(ControllerButton.Left)) {
            Direction2 = 3
            animation.setAction(Player22, ActionKind.Left)
            Player22.x += -1
        } else {
            animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player22)
        }
    }
})
forever(function () {
    if (gameStart == 0) {
        pause(500)
        menuRed.y += 1
        pause(500)
        menuRed.y += -1
    }
})
forever(function () {
    if (gameStart == 0) {
        pause(500)
        mySprite.y += -1
        pause(500)
        mySprite.y += 1
    }
})
forever(function () {
    if (gameStart == 0) {
        pause(500)
        mySprite2.y += 1
        pause(500)
        mySprite2.y += -1
    }
})
forever(function () {
    if (gameStart == 1) {
        if (controller.player1.isPressed(ControllerButton.A)) {
            music.play(music.createSoundEffect(WaveShape.Noise, 4268, 1346, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            if (Direction == 0) {
                redProjectile = sprites.createProjectileFromSprite(assets.image`RedProj0`, Player1, 200, 0)
                redProjectile.x += 8
            } else if (Direction == 1) {
                redProjectile = sprites.createProjectileFromSprite(assets.image`RedProj`, Player1, 0, 200)
                redProjectile.y += 8
            } else if (Direction == 2) {
                redProjectile = sprites.createProjectileFromSprite(assets.image`RedProj`, Player1, 0, -200)
                redProjectile.y += -8
            } else if (Direction == 3) {
                redProjectile = sprites.createProjectileFromSprite(assets.image`RedProj0`, Player1, -200, 0)
                redProjectile.x += -8
            }
            pause(500)
        }
    }
})
forever(function () {
    if (gameStart == 1) {
        mySprite6.setPosition(Player1.x, Player1.y)
        mySprite7.setPosition(Player22.x, Player22.y)
    }
})
forever(function () {
    if (gameStart == 0) {
        pause(500)
        mySprite3.y += -1
        pause(500)
        mySprite3.y += 1
    }
})
forever(function () {
    if (gameStart == 0 && controller.A.isPressed() && connected == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        gameStart = 1
        scene.setBackgroundImage(assets.image`Background`)
        mySprite6 = sprites.create(assets.image`TankBlue16`, SpriteKind.HItbox)
        mySprite7 = sprites.create(assets.image`TankBlue16`, SpriteKind.HitBox2)
        Direction = 0
        Player1 = sprites.create(assets.image`TankRed1`, SpriteKind.Player)
        Player1.setPosition(12, 12)
        mySprite6.setPosition(Player1.x, Player1.y)
        P1Right = animation.createAnimation(ActionKind.Right, 100)
        P1Right.addAnimationFrame(assets.image`TankRed1`)
        P1Right.addAnimationFrame(assets.image`TankRed2`)
        P1Right.addAnimationFrame(assets.image`TankRed3`)
        P1Right.addAnimationFrame(assets.image`TankRed4`)
        animation.attachAnimation(Player1, P1Right)
        P1Up = animation.createAnimation(ActionKind.Up, 100)
        P1Up.addAnimationFrame(assets.image`TankRed0`)
        P1Up.addAnimationFrame(assets.image`TankRed5`)
        P1Up.addAnimationFrame(assets.image`TankRed6`)
        P1Up.addAnimationFrame(assets.image`TankRed7`)
        animation.attachAnimation(Player1, P1Up)
        P1Down = animation.createAnimation(ActionKind.Down, 100)
        P1Down.addAnimationFrame(assets.image`TankRed8`)
        P1Down.addAnimationFrame(assets.image`TankRed9`)
        P1Down.addAnimationFrame(assets.image`TankRed10`)
        P1Down.addAnimationFrame(assets.image`TankRed11`)
        animation.attachAnimation(Player1, P1Down)
        P1Left = animation.createAnimation(ActionKind.Left, 100)
        P1Left.addAnimationFrame(assets.image`TankRed12`)
        P1Left.addAnimationFrame(assets.image`TankRed13`)
        P1Left.addAnimationFrame(assets.image`TankRed14`)
        P1Left.addAnimationFrame(assets.image`TankRed15`)
        animation.attachAnimation(Player1, P1Left)
        Player22 = sprites.create(assets.image`TankBlue0`, SpriteKind.Player2)
        Player22.setPosition(148, 108)
        P2Right = animation.createAnimation(ActionKind.Right, 100)
        P2Right.addAnimationFrame(assets.image`TankBlue0`)
        P2Right.addAnimationFrame(assets.image`TankBlue1`)
        P2Right.addAnimationFrame(assets.image`TankBlue2`)
        P2Right.addAnimationFrame(assets.image`TankBlue3`)
        animation.attachAnimation(Player22, P2Right)
        P2Up = animation.createAnimation(ActionKind.Up, 100)
        P2Up.addAnimationFrame(assets.image`TankBlue4`)
        P2Up.addAnimationFrame(assets.image`TankBlue5`)
        P2Up.addAnimationFrame(assets.image`TankBlue6`)
        P2Up.addAnimationFrame(assets.image`TankBlue7`)
        animation.attachAnimation(Player22, P2Up)
        P2Down = animation.createAnimation(ActionKind.Down, 100)
        P2Down.addAnimationFrame(assets.image`TankBlue8`)
        P2Down.addAnimationFrame(assets.image`TankBlue9`)
        P2Down.addAnimationFrame(assets.image`TankBlue10`)
        P2Down.addAnimationFrame(assets.image`TankBlue11`)
        animation.attachAnimation(Player22, P2Down)
        P2Left = animation.createAnimation(ActionKind.Left, 100)
        P2Left.addAnimationFrame(assets.image`TankBlue12`)
        P2Left.addAnimationFrame(assets.image`TankBlue13`)
        P2Left.addAnimationFrame(assets.image`TankBlue14`)
        P2Left.addAnimationFrame(assets.image`TankBlue15`)
        animation.attachAnimation(Player22, P2Left)
        Player1.setStayInScreen(true)
        Player22.setStayInScreen(true)
        P1Health = statusbars.create(20, 4, StatusBarKind.Health)
        P1Health.max = 3
        P1Health.setColor(5, 2)
        P1Health.value = 3
        P1Health.attachToSprite(Player1)
        P2Health = statusbars.create(20, 4, StatusBarKind.Health)
        P2Health.max = 3
        P2Health.setColor(10, 2)
        P2Health.value = 3
        P2Health.attachToSprite(Player22)
        for (let i = 0; i <= 7; i++) {
            for (let k = 0; k <= 5; k++) {
                if (randint(0, 5) == 0) {
                    Crate = sprites.create(assets.image`Crate`, SpriteKind.Wall)
                    Crate.setPosition(i * 14 + 32, k * 14 + 25)
                }
            }
        }
        mySprite7.setPosition(Player22.x, Player22.y)
    }
})
forever(function () {
    if (gameStart == 1) {
        if (P1Health.value < 1) {
            game.setGameOverMessage(true, "Player 2 Wins")
            sprites.destroy(mySprite6)
            sprites.destroy(Player1, effects.fire, 500)
            music.play(music.createSoundEffect(WaveShape.Noise, 3300, 3127, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 1346, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            pause(1000)
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
        } else if (P2Health.value < 1) {
            game.setGameOverMessage(true, "Player 1 Wins")
            sprites.destroy(mySprite6)
            sprites.destroy(Player22, effects.fire, 500)
            music.play(music.createSoundEffect(WaveShape.Noise, 3300, 3127, 255, 0, 800, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 1346, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            pause(1000)
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
        }
    }
})
