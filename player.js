class Player {

  constructor(ctx, gameW, gameH) {

    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./img/player.png";
    this.image.frames = 3;
    this.image.framesIndex = 0;

    this.posX = 50;
    this.posY = this.gameHeight - this.height - 20;
    this.posY0 = this.posY;

    this.velY = 1;
    this.gravity = 0.4;

    this.bullets = [];

    this.setListeners();
  }

  draw(framesCounter) {

  }

  animate(framesCounter) {

  }

  move() {

  }

  setListeners() {
    document.addEventListener("keydown", e => {

    });
  }

  jump() {
  }

  shoot() {
  }

  clearBullets() {
  }
}
