var TARGET_FRAME_RATE = 30

let accumulator = 0
let lastTime = 0
let req = 0
let running = false
let updating = false

// frame rate independent loop
const timeStep = () => {
	const UPDATE_INTERVAL = 1000 / TARGET_FRAME_RATE
	
	let time = window.performance.now()
	let frameTime = lastTime == 0? 0 : time - lastTime
	
	lastTime = time
	
	accumulator += frameTime

	// while loop locked at an exact frame rate
	while (running && accumulator >= UPDATE_INTERVAL) {
		if (updating) update(UPDATE_INTERVAL)
		
		accumulator -= UPDATE_INTERVAL
	}
	
	render()
	
	if (running) {
		req = requestAnimationFrame(timeStep)
	} else {
		cancelAnimationFrame(req)
	}
}

const start = () => {
	if (!running) {
		lastTime = 0
		running = true
		req = requestAnimationFrame(timeStep)
	} else {
		throw new Error('timeStep is already running: cannot start another animation frame request')
	}
}

const stop = () => {
	if (req === 0) {
		console.warn('No-op: timeStep is not running')
	} else {
		req = 0
		accumulator = 0
		running = false
	}
}