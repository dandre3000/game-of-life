var canv
var ctx

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
	
	const playBtn = document.getElementById('play')
	playBtn.addEventListener('click', e => {
		if (running) {
			stop()
			playBtn.innerText = 'Play'
		} else {
			start()
			playBtn.innerText = 'Pause'
		}
	})
	
	const dropdown = document.querySelector('#rules ~ .dropdown-content')
	Object.getOwnPropertyNames(rules).forEach(n => {
		const item = document.createElement('li')
		item.innerText = n
		
		item.addEventListener('click', e => {
			name = n
		})
		
		dropdown.appendChild(item)
	})
	
	render()
})