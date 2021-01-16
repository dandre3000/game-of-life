import { matrix } from './matrix.js'
import { rules } from './automata.js'
import { start, stop, toggleUpdate } from './timeStep.js'
import './style.css'

export var TARGET_FRAME_RATE = 30
export var canv
export var ctx
export var rule = { ...rules.Life }

export const mouse = { x: 0, y: 0}
export const size = 16

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
		for (let i in matrix.data) {
			for (let j in matrix.data[i]) {
				if (e.offsetX >= matrix.x + matrix.data[i][j].x && e.offsetX <= matrix.x + matrix.data[i][j].x + size - 1 && e.offsetY >= matrix.y + matrix.data[i][j].y && e.offsetY <= matrix.y + matrix.data[i][j].y + size - 1) {
					matrix.data[i][j].onClick()
				}
			}
		}
	})
	
	const playBtn = document.getElementById('play')
	playBtn.addEventListener('click', e => {
		playBtn.innerText = toggleUpdate()? 'Play' : 'Pause'
	})
	
	const clearBtn = document.getElementById('clear')
	clearBtn.addEventListener('click', e => {
		matrix.clear()
		// render()
	})
	
	const randomBtn = document.getElementById('random')
	randomBtn.addEventListener('click', e => {
		matrix.random()
		// render()
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
	
	fpsInput.addEventListener('input', e => {
		document.querySelector('#fps+span').innerText = TARGET_FRAME_RATE = fpsInput.value
	})
	
	document.querySelector('#fps+span').innerText = TARGET_FRAME_RATE = fpsInput.value
	
	matrix.init()
	start()
})