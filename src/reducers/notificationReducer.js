// loginReducer


export function notificationReducer (
   state = {
     content: '',
     type: '',
     show: false

	},
   action) {


	switch (action.type) {

      case "NOTIFYING": {
         return {
            ...state,
            content: action.payload.content,
            type: action.payload.type,
            show: true
         }
      }
      case "DISMISSING": {
         return {
            ...state,
            content: "",
            type: "",
            show: false
         }
      }




		default: {
			return state;
		}
	}

	return state;
}
