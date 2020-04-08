function createAnalytics(){
	let count = 0
	let isDestroyed = false

	const listener = ()=> count++

	document.addEventListener('click', listener)
	return{
		destroy(){
			document.removeEventListener('click', listener)
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