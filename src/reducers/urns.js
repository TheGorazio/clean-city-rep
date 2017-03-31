export default function urns(state = [], action) {
	if (typeof action.urnId !== 'undefiend') {
		return {
			...state,
			[action.urnId]: serviceUrns(state[action.urnId], action)
		}
	}

}

function serviceUrns(state = [], action) {
	switch(action.type) {
		case 'ADD_URN':
			return [
				...state,
				{
					"id": 6,
					"position": {
						"x": action.position.x,
						"y": action.position.y,
						"address": action.position.address
					},
					"battery": "100%",
					"filling": "0%",
					"prediction": []
				}
			];
		case 'REMOVE_URN':
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			];
		default: 
			return state;
	}

} 