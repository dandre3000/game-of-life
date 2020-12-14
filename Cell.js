const size = 16
const gap = 2

var name = 'Life'

const rules = {
	'Life': {
		B: [3],
		S: [2, 3]
	},
	'Day & Night': {
		B: [3, 6, 7, 8],
		S: [3, 4, 6, 7, 8]
	},
	'Seeds': {
		B: [2],
		S: []
	}
}

const born = ({ B }, n) => {
	for(let i in B) {
		if (n == B[i]) return 1
	}
	
	return 0
}
const survive = ({ S }, n) => {
	for(let i in S) {
		if (n == S[i]) return 1
	}
	
	return 0
}

class Cell {
	constructor(row, col) {
		this.row = row
		this.col = col
		this.x = col * size
		this.y = row * size
		this.value = 0
	}
	toggle() {
		return this.value == 0? this.value = 1 : this.value = 0
	}
	update() {
		let sum = 0
		
		for (let i = this.row - 1; i < this.row + 2; i++) {
			for (let j = this.col - 1; j < this.col + 2; j++) {
				if (i == this.row && j == this.col) {
					continue
				}
				
				if (matrix[i < 0? matrix.length - 1 : i > matrix.length - 1? 0 : i][j > matrix[0].length - 1? 0 : j < 0? matrix[0].length - 1 : j].value) sum++
			}
		}
		
		if (this.value) {
			updateMatrix[this.row][this.col].value = survive(rules[name], sum)
		} else {
			updateMatrix[this.row][this.col].value = born(rules[name], sum)
		}
	}
	draw() {
		ctx.fillStyle = this.value? 'red' : 'white'
		ctx.fillRect(matrix.x + this.x + gap / 2, matrix.y + this.y + gap / 2, size - gap, size - gap)
	}
}