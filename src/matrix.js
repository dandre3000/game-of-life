import { Cell } from './Cell.js'
import { canv } from './main.js'

export const matrix = window.matrix = []
matrix.x = 16
matrix.y = 16

matrix.shadow = []

matrix.init = () => {
	for (let i = 0; i < 36; i++) {
		matrix.push([])
		matrix.shadow.push([])
		for (let j = 0; j < 48; j++) {
			matrix[i].push(new Cell(i, j))
			matrix.shadow[i].push(new Cell(i, j))
		}
	}
}

matrix.clear = () => {
	matrix.forEach((row, i) => {
		row.forEach((cell, j) => {
			cell.value = 0
			matrix.shadow[i][j].value = 0
		})
	})
}

matrix.random = () => {
	matrix.forEach((row, i) => {
		row.forEach((cell, j) => {
			cell.value = Math.round(Math.random())
			matrix.shadow[i][j].value = 0
		})
	})
}

matrix.update = () => {
	matrix.forEach((row, i) => {
		row.forEach((cell, j) => {
			cell.update()
		})
	})
	
	matrix.forEach((row, i) => {
		row.forEach((cell, j) => {
			cell.value = matrix.shadow[i][j].value
		})
	})
}

matrix.draw = () => {
	matrix.forEach((row, i) => {
		row.forEach((cell, j) => {
			cell.draw(canv.getContext('2d'))
		})
	})
	
	//ctx.drawImage(canv.buffer, 0, 0)
}