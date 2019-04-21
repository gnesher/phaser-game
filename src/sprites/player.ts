export default class Mario extends Phaser.Physics.Arcade.Sprite {

    alive: boolean;
    animation: string;

    constructor(scene, x, y) {
        super(scene, x, y, 'characters', 325);
        this.scene = scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        }

    update(cursors) {
        this.setVelocity(0);

        if (cursors.left.isDown) {
            this.flipX = true;
            this.setVelocityX(-150);
            this.animation = 'walk-left';
        } else if (cursors.right.isDown) {
            this.setVelocityX(150);
            this.flipX = false;
            this.animation = 'walk-right';
        }

        if (cursors.up.isDown) {
            this.animation = 'walk-up';
            this.setVelocityY(-150);
        } else if (cursors.down.isDown) {
            this.setVelocityY(150);
            this.animation = 'walk-down';
        }

    }

    hurtBy(enemy) {
        if (!this.alive) {
            return;
        }

    }

    die() {
    }

}