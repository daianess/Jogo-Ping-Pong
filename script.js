const canvasElement = document.querySelector('canvas'),
  canvasContext = canvasElement.getContext('2d'),
  gapX = 10

const mouse = { x: 0, y: 0 }

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
  y: field.h / 2,
  w: line.w,
  h: 100,
  _move: function () {
    this.y = mouse.y
  },
  draw: function () {
    // Desenho da raquete esquerda
    canvasContext.fillStyle = '#ffffff'
    canvasContext.fillRect(this.x, this.y, this.w, this.h)

    this._move()
  }
}

// Raquete da direita
const rightPaddle = {
  x: field.w - line.w - gapX,
  y: field.h / 2,
  w: line.w,
  h: 100,
  _move: function () {
    this.y = ball.y
  },
  draw: function () {
    // Desenho da raquete direita
    canvasContext.fillStyle = '#ffffff'
    canvasContext.fillRect(this.x, this.y, this.w, this.h)

    this._move()
  }
}

// Bola
const ball = {
  x: field.w / 2,
  y: field.h / 2,
  r: 15,
  speed: 5, // Velocidade da bola
  directionX: 1,
  directionY: 1,
  // Direção da bola
  _calcPosition: function () {
    // Verifica se o jogador 1 (humano) fez um ponto
    if (this.x > field.w - this.r - rightPaddle.w - gapX) {
      // Calcula a posição da raquete no eixo y
      if (
        this.y + this.r > rightPaddle.y && 
        this.y - this.r < rightPaddle.y + rightPaddle.h
        ) {
        // Rebater a bola
        this._reverseX()
      } else {
        // Fazer ponto
      }
    }

    // Verifica se o jogador 2 (computador) fez um ponto
    

    // Calcula a posição vertical da bola (eixo Y)
    if (
      this.y - this.r < 0 ||
      (this.y > field.h - this.r && this.directionY > 0)
    ) {
      this._reverseY()
    }
  },
  _reverseX: function () {
    this.directionX *= -1
  },
  _reverseY: function () {
    this.directionY *= -1
  },
  _move: function () {
    // Movimento da Bola
    this.x += this.directionX * this.speed
    this.y += this.directionY * this.speed
  },
  draw: function () {
    // Desenho da bola
    canvasContext.fillStyle = '#ffffff'
    canvasContext.beginPath()
    canvasContext.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    canvasContext.fill()
    this._calcPosition()
    this._move()
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

  ball.draw() // Desenho da bola
}

// Animação para tipos de navegadores
window.animateFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60)
    }
  )
})()

// Animação
function main() {
  animateFrame(main)
  draw()
}

setup()
main()

canvasElement.addEventListener('mousemove', function (e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
})
