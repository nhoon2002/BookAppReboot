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
		notificationContent: state.notificationReducer.content,
		notificationType: state.notificationReducer.type,
		notificationShow: state.notificationReducer.show,
		posters: state.firebaseDbReducer.posters,
		movieTitles: state.firebaseDbReducer.movieTitles


	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionsCreators, dispatch);


}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;
