var canv
var ctx

const matrix = []
matrix.x = 16
matrix.y = 16

const updateMatrix = []

for (let i = 0; i < 36; i++) {
	matrix.push([])
	updateMatrix.push([])
	for (let j = 0; j < 48; j++) {
		matrix[i].push(new Cell(i, j))
		updateMatrix[i].push(new Cell(i, j))
	}
}

matrix.update = () => {
	for (let i in matrix) {
		for (let j in matrix[i]) {
			matrix[i][j].update()
		}
	}
	
	for (let i in matrix) {
		for (let j in matrix[i]) {
			matrix[i][j].value = updateMatrix[i][j].value
		}
	}
}

matrix.draw = () => {
	for (let i in matrix) {
		for (let j in matrix[i]) {
			matrix[i][j].draw()
		}
	}
}

const render = () => {
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canv.width, canv.height)
	
	matrix.draw(ctx)
}

window.addEventListener('DOMContentLoaded', e => {
	canv = document.querySelector('canvas')
	canv.width = 800
	canv.height = 600
	ctx = canv.getContext('2d')
	
	canv.addEventListener('mousemove', e => {
		render()
		
		ctx.fillStyle = 'red'
		ctx.fillRect(e.offsetX, e.offsetY, 1, 1)
	})
	
	canv.addEventListener('mousedown', e => {
		for (let i in matrix) {
			for (let j in matrix[i]) {
				if (e.offsetX >= matrix.x + matrix[i][j].x && e.offsetX <= matrix.x + matrix[i][j].x + size - 1 && e.offsetY >= matrix.y + matrix[i][j].y && e.offsetY <= matrix.y + matrix[i][j].y + size - 1) {
					matrix[i][j].toggle()
					render()
				}
			}
		}
	})
	
	const playBtn = document.querySelector('button')
	playBtn.addEventListener('click', e => {
		if (running) {
			stop()
			playBtn.innerText = 'Play'
		} else {
			start()
			playBtn.innerText = 'Pause'
		}
	})
	
	render()
})