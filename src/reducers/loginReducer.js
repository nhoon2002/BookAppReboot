

export function loginReducer (
   state = {
     signinginAccount: false,
     signinginGoogle: false,
     accountDetails: "",
     error: "",

	},
   action) {


	switch (action.type) {
      case "GOOGLE_CREATE_ACCOUNT": {
         return {
            ...state,
            signinginGoogle: true,
         }
      }
      case "GOOGLE_CREATE_ACCOUNT_SUCCESS": {
         return {
            ...state,
            signinginGoogle: false,
            accountDetails: action.payload
         }
      }
      case "GOOGLE_CREATE_ACCOUNT_ERROR": {
         return {
            ...state,
            signinginGoogle: false,
            error: action.payload
         }
      }

		case "SIGNIN_ACCOUNT": {
			console.log("Signing in to Firebase...")
			return {
				...state,
				signinginAccount: true
			}
		}

		case "SIGNIN_ACCOUNT_SUCCESS": {
			console.log("Success! Signed in to Firebase")
			return {
				...state,
				signinginAccount: false,
            accountDetails: action.payload
			}
		}

    case "SIGNIN_ACCOUNT_ERROR": {
      console.log("Error occured while creating account: %s", action.payload);
      return {
        ...state,
        signinginAccount: false,
        error: action.payload
      }
    }

		default: {
			return state;
		}
	}

	return state;
}
