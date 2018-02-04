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
		buttonFavoritesEnabled: state.movieModalReducer.buttonFavoritesEnabled,
		buttonWishlistEnabled: state.movieModalReducer.buttonWishlistEnabled,
		notificationContent: state.notificationReducer.content,
		notificationType: state.notificationReducer.type,
		notificationShow: state.notificationReducer.show,
		moviesF: state.firebaseDbReducer.moviesF,
		postersF: state.firebaseDbReducer.postersF,
		movieTitlesF: state.firebaseDbReducer.movieTitlesF,
		movieIdsF: state.firebaseDbReducer.movieIdsF,
		moviesL: state.firebaseDbReducer.moviesL,
		postersL: state.firebaseDbReducer.postersL,
		movieTitlesL: state.firebaseDbReducer.movieTitlesL,
		movieIdsL: state.firebaseDbReducer.movieIdsL


	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionsCreators, dispatch);


}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);
/*******************/

export default App;
