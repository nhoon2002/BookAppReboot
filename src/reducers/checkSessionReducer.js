

export function checkSessionReducer(
   state = {
     loggedin: false,
     currentUser: ""


	},
   action) {


	switch (action.type) {

		case "SESSION_EXISTS": {

			return {
				...state,
				loggedin: true,
        currentUser: action.payload
			}
		}
    case "SESSION_NULL": {

      return {
        ...state,
        loggedin: false,
        currentUser: ''
      }
    }



		default: {
			return state;
		}
	}

	return state;
}
