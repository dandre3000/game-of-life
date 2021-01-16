import { matrix } from './matrix.js'
import { ctx, size, rule } from './main.js'

const gap = 1
const colors = ['purple', 'indigo', 'blue', 'cyan', 'green', 'lightgreen', 'yellow', 'gold', 'orange', 'orangered', 'red']

const born = ({ B }, n) => {
	for(let i in B) {
		if (n == B[i]) return true
	}
	
	return false
}

const survive = ({ S }, n) => {
	for(let i in S) {
		if (n == S[i]) return true
	}
	
	return false
}

export class Cell {
	constructor(row, col, value = 0) {
		this.row = row
		this.col = col
		this.x = col * size
		this.y = row * size
		this.value = value // displayed value used by surrounding cells
		this.next = 0 // value that's assigned after all cells have been updated
	}
	
	onClick() {
		this.value < rule.G - 1? this.value++ : this.value = 0
		this.next = this.value
	}
	
	update() {
		let sum = 0
		
		// loop through surrounding 8 cells
		for (let i = this.row - 1; i <= this.row + 1; i++) {
			for (let j = this.col - 1; j <= this.col + 1; j++) {
				// skip self
				if (i == this.row && j == this.col) {
					continue
				}
				// wrap toroidally if cell is out of bounds
				// increment sum if value == 1
				if (matrix.data[i < 0? matrix.data.length - 1 : i > matrix.data.length - 1? 0 : i][j > matrix.data[0].length - 1? 0 : j < 0? matrix.data[0].length - 1 : j].value == 1) sum++
			}
		}
		
		// live
		if (this.value == 1) {
			this.next = this.value // no change
			
			// grow older
			if (!survive(rule, sum)) {
				this.next++
			}
		// dying
		} else if(this.value > 1) {
			this.next++
		// dead
		} else {
			this.next = born(rule, sum)
		}
		// too old
		if (this.next >= rule.G) this.next = 0
	}
	
	draw(ctx) {
		ctx.fillStyle = this.value? colors[this.value - 1] : 'white'
		ctx.fillRect(matrix.x + this.x + gap / 2, matrix.y + this.y + gap / 2, size - gap, size - gap)
	}
}