// increment 
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addUrn(urnId = 6, position) {
	return {
		type: 'ADD_URN',
		urnId,
		position
	}
}


// remove comment
export function removeUrn(urnId) {
	return {
		type: 'REMOVE_URN',
		urnId
	}
}
