import * as $ from 'jquery'
function createAnalytics(): object{
	let count: number = 0
	let isDestroyed: boolean = false

	const listener = ()=> count++

	$(document).on('click', listener)
	return{
		destroy(){
			$(document).off('click', listener)
			isDestroyed = true 
		},
		getClicks(){
			if(isDestroyed){
				return 'analytics destroyed'
			}
			return count
		}
	}
	
}

window['analytics'] = createAnalytics()