

export function movieModalReducer(
   state = {

     movieModalSrc:'',
     movieModalIsOpen: false,
     movieModalCap: '',
     movieModalDetails:'',
     movieModalTrunc:'',
     buttonFavoritesEnabled: true,
     buttonWishlistEnabled: true


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
        buttonFavoritesEnabled: action.payload.enabledF,
        buttonWishlistEnabled: action.payload.enabledL
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
        buttonFavoritesEnabled: true,
        buttonWishlistEnabled: true,
      }

    }
    case "BUTTON_SWAP_FAVORITES": {
      return {
        ...state,
        buttonFavoritesEnabled: action.payload
      }
    }
    case "BUTTON_SWAP_WISHLIST": {
      return {
        ...state,
        buttonWishlistEnabled: action.payload
      }
    }
		default: {
			return state;
		}
	}

	return state;
}
