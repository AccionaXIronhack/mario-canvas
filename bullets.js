class Bullets {

  constructor(ctx, playerPosX, playerPosY, playerPosY0, playerWidth, playerHeight) {

    this.ctx = ctx;

    this.posX = playerPosX + playerWidth;
    this.posY = playerPosY + playerHeight / 2;

    this.playerPosY0 = playerPosY0;
    this.playerHeight = playerHeight;

    this.radius = 10;

    this.velX = 10;
    this.velY = 1;

    this.gravity = 1;
  }

  draw() {
  }

  move() {
  }
}
