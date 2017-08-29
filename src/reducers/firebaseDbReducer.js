


export function firebaseDbReducer(
   state = {
     retrieved: false,
     movies: []

	},
   action) {


	switch (action.type) {

		case "FB_SNAP_RETRIEVED": {
			console.log("Data Received from Firebase Snapshot!")
			return {
				...state,
				retrieved: true,
        movies: action.payload
			}
		}

		default: {
			return state;
		}
	}

	return state;
}
