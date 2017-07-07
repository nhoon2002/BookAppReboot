

export function createAccReducer(
   state = {
     creatingAccount: false,
     accountDetails: "",
     error: "",

	},
   action) {


	switch (action.type) {

		case "CREATE_ACCOUNT": {
			console.log("Creating Account to Firebase...")
			return {
				...state,
				creatingAccount: true
			}
		}

		case "CREATE_ACCOUNT_SUCCESS": {
			console.log("Success! Created Account to Firebase")
			return {
				...state,
				creatingAccount: false,
        accountDetails: action.payload
			}
		}

    case "CREATE_ACCOUNT_ERROR": {
      console.log("Error occured while creating account: %s", action.payload);
      return {
        ...state,
        creatingAccount: false,
        error: action.payload
      }
    }

		default: {
			return state;
		}
	}

	return state;
}
