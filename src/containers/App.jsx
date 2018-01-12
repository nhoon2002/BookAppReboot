import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionsCreators from '../actions/userActions';
import Main from './Main.jsx';

function mapStateToProps (state) {

	console.log("mapping STATE to PROPS", state)
	return {
		allData: state,
    sampleAction: state.sampleReducer.sampleAction,
    sampleActionDispatch: state.sampleReducer.sampleActionDispatch,
		createAccount: state.createAccReducer.creatingAccount,
		loginStatus: state.checkSessionReducer.loggedin,
		currentUser: state.checkSessionReducer.currentUser,
		loginAccount: state.loginReducer.signinginAccount,
		queryData: state.tmdbReducer.dataReturned,
		movieModalSrc: state.movieModalReducer.movieModalSrc,
		movieModalCap: state.movieModalReducer.movieModalCap,
		movieModalIsOpen: state.movieModalReducer.movieModalIsOpen,
		movieModalDetails: state.movieModalReducer.movieModalDetails,
		movieModalTrunc: state.movieModalReducer.movieModalTrunc,
		movies: state.firebaseDbReducer.movies,

		// errorMsgs: state.regErrReducer.errorMsgs,
		// isLoggedInCheck: state.checkSession.isLoggedIn,
		// CheckSeshUserID: state.checkSession.sessionUserID,
		// CheckSeshUser: state.checkSession.sessionUser,
		// showModal: state.modalReducer.showModal,
		// loginModal: state.modalReducer.loginModal,
		// teamModal: state.modalReducer.teamModal,
      //
		// // loggedInUser: state.loginReducer.user,
		// team: {
		// 	teamname: state.teamCreateReducer.teamnames,
		// 	tech: state.teamCreateReducer.techs,
		// 	description: state.teamCreateReducer.descriptions
		// },
		// todos: state.todosReducer.todos
		// // allteams: state.teamUpdateReducer.teams,


	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionsCreators, dispatch);


}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;
