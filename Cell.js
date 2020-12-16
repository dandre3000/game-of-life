const size = 16
const gap = 1
const colors = ['purple', 'indigo', 'blue', 'cyan', 'green', 'lightgreen', 'yellow', 'gold', 'orange', 'orangered', 'red']

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
				
				if (matrix[i < 0? matrix.length - 1 : i > matrix.length - 1? 0 : i][j > matrix[0].length - 1? 0 : j < 0? matrix[0].length - 1 : j].value == 1) sum++
			}
		}
		
		if (this.value > 0) {
			if (!survive(rule, sum)) {
				updateMatrix[this.row][this.col].value = this.value + 1
			}
		} else {
			updateMatrix[this.row][this.col].value = born(rule, sum)
		}
		
		if (updateMatrix[this.row][this.col].value >= rule.G) updateMatrix[this.row][this.col].value = 0
	}
	draw(ctx) {
		ctx.fillStyle = this.value? colors[this.value - 1] : 'white'
		ctx.fillRect(matrix.x + this.x + gap / 2, matrix.y + this.y + gap / 2, size - gap, size - gap)
	}
}