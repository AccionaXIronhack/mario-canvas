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

  },


  createAll() {

  },

  drawAll() {

  },

  clear() {

  },

  generateObstacles() {

  },

  clearObstacles() {
  },

  isCollision() {
  },

  gameOver() {
  }
}
