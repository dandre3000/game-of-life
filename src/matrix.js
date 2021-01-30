import { Cell } from './Cell.js'
import { canv, size } from './main.js'

export const matrix = window.matrix = {
	data: [],
	updates: [],
	x: 0,
	y: 0,
	w: 0,
	h: 0,
	buffer: document.createElement('canvas'),
	
	init: () => {
		const min = Math.min(canv.width, canv.height)
		const rows = 32 // Math.floor(min / size)
		
		matrix.buffer.width = rows * size
		matrix.buffer.height = rows * size
		matrix.x = (canv.width - matrix.buffer.width) / 2
		matrix.y = (canv.height - matrix.buffer.height) / 2
		
		for (let i = 0; i < rows; i++) {
			matrix.data.push([])
			for (let j = 0; j < rows; j++) {
				const cell = new Cell(i, j)
				
				matrix.data[i].push(cell)
				cell.draw(matrix.buffer.getContext('2d'))
			}
		}
	},

	clear: () => {
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.value = 0
				cell.next = 0
				
				matrix.updates.push(cell)
			})
		})
	},

	random: () => {
		matrix.updates = []
		
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				let v = Math.round(Math.random())
				
				if (cell.value != v) {
					cell.value = v
					cell.next = v
					
					matrix.updates.push(cell)
				}
			})
		})
	},
	
	onClick: e => {
		for (let i in matrix.data) {
			for (let j in matrix.data[i]) {
				const row = n => n < 0? matrix.data.length - 1 : n > matrix.data.length - 1? 0 : n
				const col = n => n > matrix.data[0].length - 1? 0 : n < 0? matrix.data[0].length - 1 : n
				
				if (matrix.data[i][j].intersectPoint(e.offsetX, e.offsetY)) {
					matrix.data[Number(i) + 1 > matrix.data.length - 1? 0 : Number(i) + 1][j].onClick(e)
					matrix.data[Number(i) - 1 < 0? matrix.data.length - 1 : Number(i) - 1][j].onClick(e)
					matrix.data[i][Number(j) + 1 > matrix.data[i].length - 1? 0 : Number(j) + 1].onClick(e)
					matrix.data[i][Number(j) - 1 < 0? matrix.data[i].length - 1 : Number(j) - 1].onClick(e)
					matrix.data[i][j].onClick(e)
				}
			}
		}
	},

	update: () => {
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.update()
			})
		})
		
		matrix.updates.forEach(cell => {
			cell.value = cell.next
		})
	},

	draw: () => {
		canv.getContext('2d').drawImage(matrix.buffer, matrix.x, matrix.y)
		
		matrix.updates.forEach(cell => {
			cell.draw(matrix.buffer.getContext('2d'))
		})
		
		matrix.updates = []
	}
}