

export function movieModalReducer(
   state = {

     movieModalSrc:'',
     movieModalIsOpen: false,
     movieModalCap: '',
     movieModalDetails:''


	},
   action) {


	switch (action.type) {

		case "MOVIEMODAL_ON": {
			console.log("Toggled movieModal ON!")
			return {
				...state,
				movieModalSrc: `https://image.tmdb.org/t/p/original${action.payload.poster_path}`,
        movieModalIsOpen: true,
        movieModalCap: action.payload.title,
        movieModalDetails: action.payload.details
			}
		}
    case "MOVIEMODAL_OFF": {
      console.log('Toggled movieModal OFF!');
      return {
        ...state,
        movieModalSrc: '',
        movieModalIsOpen: false,
        movieModalCap: ''
      }

    }
		default: {
			return state;
		}
	}

	return state;
}
