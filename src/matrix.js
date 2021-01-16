import { Cell } from './Cell.js'
import { canv } from './main.js'

export const matrix = window.matrix = {
	data: [],
	x: 16,
	y: 16,
	
	init: () => {
		for (let i = 0; i < 36; i++) {
			matrix.data.push([])
			for (let j = 0; j < 48; j++) {
				matrix.data[i].push(new Cell(i, j))
			}
		}
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