import { canv, ctx, mouse } from './main.js'
import { matrix } from './matrix.js'

export const render = () => {
	ctx.fillStyle = 'black'
	ctx.fillRect(0, 0, canv.width, canv.height)
	
	matrix.draw(ctx)
	
	ctx.fillStyle = 'red'
	ctx.fillRect(mouse.x, mouse.y, 1, 1)
}