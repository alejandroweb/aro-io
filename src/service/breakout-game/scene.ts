import Phaser from 'phaser';

class Breakout extends Phaser.Scene {
  ball: any;
  bricks: any;
  cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
  gameOver: boolean;
  paddle: any;

  constructor(config: any) {
    super(config);

    this.gameOver = false;
  }

  preload() {
    this.load.atlas(
      'assets',
      'https://labs.phaser.io/assets/games/breakout/breakout.png',
      'https://labs.phaser.io/assets/games/breakout/breakout.json',
    );
  }

  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.bricks = this.physics.add.staticGroup({
      key: 'assets',
      frame: ['blue1', 'red1', 'green1', 'yellow1', 'silver1', 'purple1'],
      frameQuantity: 10,
      gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 },
    });

    this.ball = this.physics.add
      .image(400, 500, 'assets', 'ball1')
      .setCollideWorldBounds(true)
      .setBounce(1);

    this.ball.setData('onPaddle', true);
    this.paddle = this.physics.add.image(400, 550, 'assets', 'paddle1').setImmovable();

    this.physics.add.collider(this.ball, this.bricks, this.hitBrick, undefined, this);
    this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, undefined, this);

    this.input.on('pointermove', (pointer: any) => {
      this.move(pointer.x);
    });

    this.input.on('pointerup', this.play);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  play = () => {
    if (this.ball.getData('onPaddle')) {
      this.ball.setVelocity(-75, -300);
      this.ball.setData('onPaddle', false);
    }
  };

  move(x: number) {
    //  Keep the paddle within the game
    const clamp = Phaser.Math.Clamp(x, 52, 748);

    this.paddle.x = clamp;

    if (this.ball.getData('onPaddle')) {
      this.ball.x = this.paddle.x;
    }
  }

  hitBrick(_ball: any, brick: any) {
    brick.disableBody(true, true);

    this.game.events.emit('hitbrick');

    if (this.bricks.countActive() === 0) {
      this.resetLevel();
    }
  }

  resetBall() {
    this.ball.setVelocity(0);
    this.ball.setPosition(this.paddle.x, 500);
    this.ball.setData('onPaddle', true);
  }

  resetLevel() {
    this.resetBall();

    this.bricks.children.each((brick: any) => {
      brick.enableBody(false, 0, 0, true, true);
    });

    this.gameOver = false;
  }

  hitPaddle(ball: any, paddle: any) {
    let diff = 0;

    if (ball.x < paddle.x) {
      //  Ball is on the left-hand side of the paddle
      diff = paddle.x - ball.x;
      ball.setVelocityX(-10 * diff);
    } else if (ball.x > paddle.x) {
      //  Ball is on the right-hand side of the paddle
      diff = ball.x - paddle.x;
      ball.setVelocityX(10 * diff);
    } else {
      //  Ball is perfectly in the middle
      //  Add a little random X to stop it bouncing straight up!
      ball.setVelocityX(2 + Math.random() * 8);
    }
  }

  update() {
    if (this.ball.y > 600) {
      this.resetBall();

      this.game.events.emit('balllost');
    } else if (!this.gameOver && this.cursors && this.cursors.left && this.cursors.left.isDown) {
      this.move(this.paddle.x - 8);
    } else if (!this.gameOver && this.cursors && this.cursors.right && this.cursors.right.isDown) {
      this.move(this.paddle.x + 8);
    } else if (!this.gameOver && this.cursors && this.cursors.space && this.cursors.space.isDown) {
      this.play();
    }
  }
}

export default Breakout;
