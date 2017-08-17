

export function lightboxReducer(
   state = {

     lightboxSrc:'',
     lightboxIsOpen: false,
     lightboxCap: ''


	},
   action) {


	switch (action.type) {

		case "LIGHTBOX_ON": {
			console.log("Toggled lightbox ON!")
			return {
				...state,
				lightboxSrc: `https://image.tmdb.org/t/p/original${action.payload.poster_path}`,
        lightboxIsOpen: true,
        lightboxCap: action.payload.title
			}
		}
    case "LIGHTBOX_OFF": {
      console.log('Toggled lightbox OFF!');
      return {
        ...state,
        lightboxSrc: '',
        lightboxIsOpen: false,
        lightboxCap: ''
      }

    }
		default: {
			return state;
		}
	}

	return state;
}
