var canv
var ctx

const mouse = { x: 0, y: 0}

const render = () => {
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canv.width, canv.height)
	
	matrix.draw(ctx)
	
	ctx.fillStyle = 'red'
	ctx.fillRect(mouse.x, mouse.y, 1, 1)
}

window.addEventListener('DOMContentLoaded', e => {
	canv = document.querySelector('canvas')
	// canv.buffer = document.createElement('canvas')
	/*canv.buffer.width = */canv.width = 800
	/*canv.buffer.width = */canv.height = 600
	ctx = canv.getContext('2d')
	
	canv.addEventListener('mousemove', e => {
		mouse.x = e.offsetX
		mouse.y = e.offsetY
	})
	
	canv.addEventListener('mousedown', e => {
		for (let i in matrix) {
			for (let j in matrix[i]) {
				if (e.offsetX >= matrix.x + matrix[i][j].x && e.offsetX <= matrix.x + matrix[i][j].x + size - 1 && e.offsetY >= matrix.y + matrix[i][j].y && e.offsetY <= matrix.y + matrix[i][j].y + size - 1) {
					updateMatrix[i][j].toggle()
					matrix[i][j].toggle()
				}
			}
		}
	})
	
	const playBtn = document.getElementById('play')
	playBtn.addEventListener('click', e => {
		if (updating) {
			updating = false
			playBtn.innerText = 'Play'
		} else {
			updating = true
			playBtn.innerText = 'Pause'
		}
	})
	
	const clearBtn = document.getElementById('clear')
	clearBtn.addEventListener('click', e => {
		matrix.clear()
		render()
	})
	
	const randomBtn = document.getElementById('random')
	randomBtn.addEventListener('click', e => {
		matrix.random()
		render()
	})
	
	const dropdown = document.querySelector('#rules ~ .dropdown-content')
	Object.getOwnPropertyNames(rules).forEach(n => {
		const item = document.createElement('li')
		item.innerText = n
		
		item.addEventListener('click', e => {
			name = n
			rule = { ...rules[name] }
			BInput.value = rule.B
			SInput.value = rule.S
			GInput.value = rule.G
		})
		
		dropdown.appendChild(item)
	})
	
	const BInput = document.getElementById('B-input')
	BInput.addEventListener('input', e => {
		const B = []
		const input = BInput.value.replace(/,*/g,'')
		
		for (let i in input) {
			const n = Number(input[i])
			
			if (isNaN(n)) return false
			B.push(n)
		}
		
		rule.B = B
	})
	
	const SInput = document.getElementById('S-input')
	SInput.addEventListener('input', e => {
		const S = []
		const input = SInput.value.replace(/,*/g,'')
		
		for (let i in input) {
			const n = Number(input[i])
			
			if (isNaN(n)) return false
			S.push(n)
		}
		
		rule.S = S
	})
	
	const GInput = document.getElementById('G-input')
	GInput.addEventListener('input', e => {
		rule.G = GInput.value
	})
	
	const fpsInput = document.getElementById('fps')
	document.querySelector('#fps+span').innerText = TARGET_FRAME_RATE = fpsInput.value
	fpsInput.addEventListener('input', e => {
		document.querySelector('#fps+span').innerText = TARGET_FRAME_RATE = fpsInput.value
	})
	
	start()
})