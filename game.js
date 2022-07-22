const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstacles: [],
  intervalId: undefined,

  init() {
    this.canvas = document.getElementById("myCanvas")
    this.ctx = this.canvas.getContext("2d")
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  },

  start() {
    this.createAll();

    this.intervalId = setInterval(() => {
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.generateObstacles();
      this.clearObstacles();
      this.isCollision();

    }, 1000/this.FPS)
  },


  createAll() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height);
  },

  drawAll() {
    this.background.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    })
    this.player.draw(this.framesCounter);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstacles() {
    if(this.framesCounter % 90 === 0){
      this.obstacles.push(new Obstacle(this.ctx, this.width, this.player.posY0, this.player.height));
    }
  },

  clearObstacles() {
    this.obstacles = this.obstacles.filter((obstacle) => {
      return obstacle.posX >= 0;
    })
  },

  isCollision() {
    this.obstacles.forEach((obstacle) => {
      if(this.player.posX < obstacle.posX + obstacle.width &&
        this.player.posX + this.player.width > obstacle.posX &&
        this.player.posY < obstacle.posY + obstacle.height &&
        this.player.height + this.player.posY > obstacle.posY) {
          clearInterval(this.intervalId); // Rompe el intervalo
        }
    })
  },
}
