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

window.addEventListener('DOMContentLoaded', () => {
	window.canv = canv = document.querySelector('canvas')
	
	ctx = canv.getContext('2d')
	
	canv.addEventListener('mousemove', e => {
		mouse.x = e.offsetX
		mouse.y = e.offsetY
		
		matrix.onClick(e)
	})
	
	canv.addEventListener('mousedown', e => {
		matrix.onClick(e)
	})
	
	canv.addEventListener('contextmenu', e => {
		e.preventDefault()
		
		return false
	})
	
	const playBtn = document.getElementById('play')
	playBtn.addEventListener('click', e => {
		playBtn.innerText = toggleUpdate()? 'Pause' : 'Play'
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
	const ruleDisplay = document.getElementById('rule')
	ruleDisplay.innerText = 'Life'
	
	Object.getOwnPropertyNames(rules).forEach(name => {
		const item = document.createElement('li')
		item.innerText = name
		
		item.addEventListener('click', e => {
			rule = { ...rules[name] }
			BInput.value = rule.B
			SInput.value = rule.S
			GInput.value = rule.G
			
			ruleDisplay.innerText = name
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
})

window.onload = () => {
	canv.width = canv.offsetWidth
	canv.height = canv.width * 3 / 4
	
	matrix.init()
	start()
}