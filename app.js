let canv = document.getElementById('canvas')
let ctx = canv.getContext('2d') 
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

canvWidth = window.innerWidth
canvHeight = window.innerHeight


// VerticalLine
ctx.fillStyle = "black"
ctx.fillRect(164, 0, 2, 500)
ctx.fillStyle = "black"
ctx.fillRect(334, 0, 2, 500)

// HorizontalLine
ctx.fillStyle = "black"
ctx.fillRect(0, 165, 500, 2)
ctx.fillStyle = "black"
ctx.fillRect(0, 330, 500, 2)

// // X
// // TOP
// // TopLeft_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(0, 0)
// ctx.lineTo(165, 165)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 0)
// ctx.lineTo(0, 165)
// ctx.stroke()
// // TopCenter_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 0)
// ctx.lineTo(330, 165)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 0)
// ctx.lineTo(165, 165)
// ctx.stroke()
// // TopRight_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 0)
// ctx.lineTo(500, 165)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(500, 0)
// ctx.lineTo(330, 165)
// ctx.stroke()

// // CENTER
// // CenterLeft_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(0, 165)
// ctx.lineTo(165, 330)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 165)
// ctx.lineTo(0, 330)
// ctx.stroke()
// // CenterCenter_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 165)
// ctx.lineTo(330, 330)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 165)
// ctx.lineTo(165, 330)
// ctx.stroke()
// // CenterRight_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 165)
// ctx.lineTo(500, 330)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(500, 165)
// ctx.lineTo(330, 330)
// ctx.stroke()

// // BOTTOM
// // BottomLeft_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(0, 330)
// ctx.lineTo(165, 500)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 330)
// ctx.lineTo(0, 500)
// ctx.stroke()
// // BottomCenter_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(165, 330)
// ctx.lineTo(330, 500)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 330)
// ctx.lineTo(165, 500)
// ctx.stroke()
// // BottomRight_X
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(330, 330)
// ctx.lineTo(500, 500)
// ctx.stroke()
// ctx.beginPath()
// ctx.strokeStyle = 'black'
// ctx.moveTo(500, 330)
// ctx.lineTo(330, 550)
// ctx.stroke()

// O
// TOP
// TopLeft_O
ctx.beginPath()
ctx.arc(80, 80, 79, 0, 360)
ctx.stroke()
// TopCenter_O
ctx.beginPath()
ctx.arc(250, 80, 79, 0, 360)
ctx.stroke()
// TopRight_O
ctx.beginPath()
ctx.arc(420, 80, 79, 0, 360)
ctx.stroke()

