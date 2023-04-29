const canvasElement = document.querySelector('canvas'),
  canvasContext = canvasElement.getContext('2d'),
  gapX = 10

const lineWidth = 15

// Definir a dimensão dos elementos da tela
function setup() {
  canvasElement.width = canvasContext.width = window.innerWidth
  canvasElement.height = canvasContext.height = window.innerHeight
}

// Desenho dos elementos no cenário

// Cor de fundo do campo
function draw() {
  canvasContext.fillStyle = '#000000'
  canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight)

  // Linha de divisão do campo
  canvasContext.fillStyle = '#ffffff'
  canvasContext.fillRect(
    window.innerWidth / 2 - lineWidth / 2,
    0,
    lineWidth,
    window.innerHeight
  )

  // Raquete esquerda
  canvasContext.fillStyle = '#ffffff'
  canvasContext.fillRect(gapX, 300, lineWidth, 100)

  // Raquete direita
  canvasContext.fillStyle = '#ffffff'
  canvasContext.fillRect(
    window.innerWidth - lineWidth - gapX,
    300,
    lineWidth,
    100
  )
}

setup()
draw()
