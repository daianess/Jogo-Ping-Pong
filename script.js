const canvasElement = document.querySelector('canvas'),
  canvasContext = canvasElement.getContext('2d'),
  gapX = 10

const lineWidth = 15

// Campo
const field = {
  w: window.innerWidth,
  h: window.innerHeight,
  draw: function () {
    // Desenho do campo
    canvasContext.fillStyle = '#000000'
    canvasContext.fillRect(0, 0, this.w, this.h)
  }
}

// Linha central do campo
const line = {
  w: 15,
  h: field.h,
  draw: function () {
    // Desenho da linha central do campo
    canvasContext.fillStyle = '#ffffff'
    canvasContext.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
  }
}

// Raquete da esquerda
const leftPaddle = {
  x: gapX,
  y: 240,
  w: line.w,
  h: 100,
  draw: function () {
    // Desenho da raquete esquerda
    canvasContext.fillStyle = '#ffffff'
    canvasContext.fillRect(this.x, this.y, this.w, this.h)
  }
}

// Raquete da direita
const rightPaddle = {
  x: field.w - line.w - gapX,
  y: 240,
  w: line.w,
  h: 100,
  draw: function () {
    // Desenho da raquete direita
    canvasContext.fillStyle = '#ffffff'
    canvasContext.fillRect(this.x, this.w, this.w, this.h)
  }
}

// Definir a dimensão dos elementos da tela
function setup() {
  canvasElement.width = canvasContext.width = window.innerWidth
  canvasElement.height = canvasContext.height = window.innerHeight
}

// Desenho dos elementos no cenário
function draw() {
  field.draw() // Campo
  line.draw() // Linha de divisão do campo

  leftPaddle.draw() // Raquete esquerda
  rightPaddle.draw() // Raquete direita

  // Bolinha
  canvasContext.fillStyle = '#ffffff'
  canvasContext.beginPath()
  canvasContext.arc(120, 240, 10, 0, 2 * Math.PI, false)
  canvasContext.fill()
}

setup()
draw()
