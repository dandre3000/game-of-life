const size = 16
const gap = 2

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
			//updateMatrix[this.row][this.col].value = (sum == 2 || sum == 3)? 1 : 0
			updateMatrix[this.row][this.col].value = (sum == 3 || sum == 4 || sum == 6 || sum == 7 || sum == 8)? 1 : 0 // day and night
			//updateMatrix[this.row][this.col].value = 0 // seeds
		} else {
			//updateMatrix[this.row][this.col].value = sum == 3? 1 : 0
			updateMatrix[this.row][this.col].value = (sum == 3 || sum == 6 || sum == 7 || sum == 8)? 1 : 0 // day and night
			//updateMatrix[this.row][this.col].value = sum == 2? 1 : 0 // seeds
		}
	}
	draw() {
		ctx.fillStyle = this.value? 'red': 'white'
		ctx.fillRect(matrix.x + this.x + gap / 2, matrix.y + this.y + gap / 2, size - gap, size - gap)
	}
}