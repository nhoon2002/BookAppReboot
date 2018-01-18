


export function firebaseDbReducer(
   state = {
     retrieved: false,
     movies: [],
     posters: [],
     movieTitles: []

	},
   action) {


	switch (action.type) {

		case "FB_SNAP_RETRIEVED": {
			console.log("Data Received from Firebase Snapshot!")
			return {
				...state,
				retrieved: true,
        movies: action.payload.movies,
        posters: action.payload.posters,
        movieTitles: action.payload.movieTitles
			}
		}

		default: {
			return state;
		}
	}

	return state;
}
