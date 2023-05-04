class ActionKind(Enum):
    Right = 0
    Up = 1
    Down = 2
    Left = 3
    Walking = 4
    Idle = 5
    Jumping = 6
@namespace
class SpriteKind:
    Wall = SpriteKind.create()

def on_player1_button_a_pressed():
    global redProjectile
    if Direction == 0:
        redProjectile = sprites.create_projectile_from_sprite(assets.image("""
            RedProj0
        """), Player1, 200, 0)
        redProjectile.x += 12
    elif Direction == 1:
        redProjectile = sprites.create_projectile_from_sprite(assets.image("""
            RedProj
        """), Player1, 0, 200)
        redProjectile.y += 12
    elif Direction == 2:
        redProjectile = sprites.create_projectile_from_sprite(assets.image("""
            RedProj
        """), Player1, 0, -200)
        redProjectile.y += -12
    elif Direction == 3:
        redProjectile = sprites.create_projectile_from_sprite(assets.image("""
            RedProj0
        """), Player1, -200, 0)
        redProjectile.x += -12
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprite.set_velocity(0, 0)
    sprites.destroy(sprite, effects.fire, 200)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Wall, on_on_overlap)

redProjectile: Sprite = None
Crate: Sprite = None
Player1: Sprite = None
Direction = 0
scene.set_background_image(assets.image("""
    Background
"""))
Direction = 0
Player1 = sprites.create(assets.image("""
    TankRed1
"""), SpriteKind.player)
Player1.set_position(12, 12)
P1Right = animation.create_animation(ActionKind.Right, 100)
P1Right.add_animation_frame(assets.image("""
    TankRed1
"""))
P1Right.add_animation_frame(assets.image("""
    TankRed2
"""))
P1Right.add_animation_frame(assets.image("""
    TankRed3
"""))
P1Right.add_animation_frame(assets.image("""
    TankRed4
"""))
animation.attach_animation(Player1, P1Right)
P1Up = animation.create_animation(ActionKind.Up, 100)
P1Up.add_animation_frame(assets.image("""
    TankRed0
"""))
P1Up.add_animation_frame(assets.image("""
    TankRed5
"""))
P1Up.add_animation_frame(assets.image("""
    TankRed6
"""))
P1Up.add_animation_frame(assets.image("""
    TankRed7
"""))
animation.attach_animation(Player1, P1Up)
P1Down = animation.create_animation(ActionKind.Down, 100)
P1Down.add_animation_frame(assets.image("""
    TankRed8
"""))
P1Down.add_animation_frame(assets.image("""
    TankRed9
"""))
P1Down.add_animation_frame(assets.image("""
    TankRed10
"""))
P1Down.add_animation_frame(assets.image("""
    TankRed11
"""))
animation.attach_animation(Player1, P1Down)
P1Left = animation.create_animation(ActionKind.Left, 100)
P1Left.add_animation_frame(assets.image("""
    TankRed12
"""))
P1Left.add_animation_frame(assets.image("""
    TankRed13
"""))
P1Left.add_animation_frame(assets.image("""
    TankRed14
"""))
P1Left.add_animation_frame(assets.image("""
    TankRed15
"""))
animation.attach_animation(Player1, P1Left)
for i in range(8):
    for k in range(6):
        if randint(0, 5) == 0:
            Crate = sprites.create(assets.image("""
                Crate
            """), SpriteKind.Wall)
            Crate.set_position(i * 14 + 32, k * 14 + 25)

def on_forever():
    global Direction
    if controller.player1.is_pressed(ControllerButton.RIGHT):
        Direction = 0
        animation.set_action(Player1, ActionKind.Right)
        Player1.x += 1
        if Player1.overlaps_with(None):
            Player1.x += -1
    elif controller.player1.is_pressed(ControllerButton.DOWN):
        Direction = 1
        animation.set_action(Player1, ActionKind.Down)
        Player1.y += 1
    elif controller.player1.is_pressed(ControllerButton.UP):
        Direction = 2
        animation.set_action(Player1, ActionKind.Up)
        Player1.y += -1
    elif controller.player1.is_pressed(ControllerButton.LEFT):
        Direction = 3
        animation.set_action(Player1, ActionKind.Left)
        Player1.x += -1
    else:
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, Player1)
forever(on_forever)
