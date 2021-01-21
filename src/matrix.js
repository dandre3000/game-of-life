import { Cell } from './Cell.js'
import { canv } from './main.js'

export const matrix = window.matrix = {
	data: [],
	x: 0,
	y: 0,
	w: 0,
	h: 0,
	
	init: () => {
		const min = Math.min(canv.width, canv.height)
		const rows = Math.floor(min / 16)
		
		for (let i = 0; i < rows; i++) {
			matrix.data.push([])
			for (let j = 0; j < rows; j++) {
				matrix.data[i].push(new Cell(i, j))
			}
		}
		
		matrix.w = rows * 16
		matrix.h = rows * 16
		matrix.x = (canv.width - matrix.w) / 2
		matrix.y = (canv.height - matrix.h) / 2
	},

	clear: () => {
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.value = 0
				cell.next = 0
			})
		})
	},

	random: () => {
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.value = Math.round(Math.random())
				cell.next = 0
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
		
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.value = cell.next
			})
		})
	},

	draw: () => {
		matrix.data.forEach((row, i) => {
			row.forEach((cell, j) => {
				cell.draw(canv.getContext('2d'))
			})
		})
		
		//ctx.drawImage(canv.buffer, 0, 0)
	}
}