

export function sampleReducer(
   state = {

	},
   action) {


	switch (action.type) {
		case "SAMPLE_ACTION": {
			console.log("sample action reducer")
			return {
				...state,
				sampleAction: action.payload
			}
		}
		case "SAMPLE_ACTION_DISPATCH": {
			console.log("sample action dispatch reducer")
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
