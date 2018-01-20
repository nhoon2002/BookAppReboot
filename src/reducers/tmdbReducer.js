

export function tmdbReducer(
   state = {

     dataReturned: '',
     queryString: '',
     queryError: false


	},
   action) {


	switch (action.type) {

		case "QUERY_FETCH_SUCCESS": {
			console.log("tmdbReducer successfully returned data!")
			return {
				...state,
				dataReturned: action.payload,
        dataFetching: false
			}
		}
    case "QUERY_FETCH_ERROR": {
      console.log('tmdbReducer fetched erroneous data!');
      return {
        ...state,
        dataFetching: false,
        queryError: action.payload
      }

    }
    case "LOGGED_OUT_CLEAR": {
      return {
        ...state,
        dataReturned: '',
        queryString: '',
        queryError: false
      }
    }
		default: {
			return state;
		}
	}

	return state;
}
