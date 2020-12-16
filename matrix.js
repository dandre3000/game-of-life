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

matrix.clear = () => {
	for (let i in matrix) {
		for (let j in matrix[i]) {
			matrix[i][j].value = 0
			updateMatrix[i][j].value = 0
		}
	}
}

matrix.random = () => {
	for (let i in matrix) {
		for (let j in matrix[i]) {
			matrix[i][j].value = Math.round(Math.random())
			updateMatrix[i][j].value = 0
		}
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
			matrix[i][j].draw(canv.getContext('2d'))
		}
	}
	
	//ctx.drawImage(canv.buffer, 0, 0)
}