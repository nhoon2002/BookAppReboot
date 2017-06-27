

export function sampleReducer(
   state = {

	},
   action) {


	switch (action.type) {
		case "SAMPLE_ACTION": {
			console.log("sample action")
			return {
				...state,
				sampleAction: action.payload
			}
		}
		default: {
			return state;
		}
	}

	return state;
}
