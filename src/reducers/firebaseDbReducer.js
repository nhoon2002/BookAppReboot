


export function firebaseDbReducer(
   state = {
     retrieved: false,
     moviesF: [],
     postersF: [],
     movieTitlesF: [],
     movieIdsF: [],
     moviesL: [],
     postersL: [],
     movieTitlesL: [],
     movieIdsL: [],

	},
   action) {


	switch (action.type) {

		case "FB_SNAP_RETRIEVED_FAVORITES": {
			console.log("Data Received from Firebase Snapshot!")
			return {
				...state,
				retrieved: true,
        moviesF: action.payload.movies,
        postersF: action.payload.posters,
        movieTitlesF: action.payload.movieTitles,
        movieIdsF: action.payload.movieIds
			}
		}
		case "FB_SNAP_RETRIEVED_WISHLIST": {
			console.log("Data Received from Firebase Snapshot!")
			return {
				...state,
				retrieved: true,
        moviesL: action.payload.movies,
        postersL: action.payload.posters,
        movieTitlesL: action.payload.movieTitles,
        movieIdsL: action.payload.movieIds
			}
		}


		default: {
			return state;
		}
	}

	return state;
}
