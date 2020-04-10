import * as $ from 'jquery'
function createAnalytics(){
	let count = 0
	let isDestroyed = false

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

window.analytics = createAnalytics()