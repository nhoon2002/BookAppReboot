

export function movieModalReducer(
   state = {

     movieModalSrc:'',
     movieModalIsOpen: false,
     movieModalCap: '',
     movieModalDetails:'',
     movieModalTrunc:'',
     buttonEnabled: true


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
        movieModalDetails: action.payload.details,
        movieModalTrunc: action.payload.details.overview.substr(0,500),
        buttonEnabled: action.payload.enabled //characterlimit
			}
		}
    case "MOVIEMODAL_OFF": {
      console.log('Toggled movieModal OFF!');
      return {
        ...state,
        movieModalSrc: '',
        movieModalIsOpen: false,
        movieModalCap: '',
        movieModalDetails: '',
        movieModalTrunc: '',
        buttonEnabled: true
      }

    }
    case "BUTTON_SWAP": {
      return {
        ...state,
        buttonEnabled: action.payload
      }
    }
		default: {
			return state;
		}
	}

	return state;
}
