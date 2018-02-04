import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

import Home from './containers/Home.jsx';
import Signin from './containers/Signin.jsx';
import Signup from './containers/Signup.jsx';
import Favorites from './containers/Favorites.jsx';
import Wishlist from './containers/Wishlist.jsx';
import Search from './containers/Search.jsx';

import fire from './fire.js';
import {checkSession} from './actions/userActions.js';

// import {checkSession} from './actions/userActions';
// import * as firebase from 'firebase';
// const checkReroute = () => {
// 	console.log('Checking for existing session before reroute...');
// 	store.dispatch(checkSession(firebase.auth().currentUser));
// }

fire.auth().onAuthStateChanged(firebaseUser => {

	store.dispatch(checkSession());
	if(firebaseUser) console.log('User: %s', firebaseUser.uid);
	else console.log('User: %s', null);

}
);




const theRoutes = (
	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App}>

		      <IndexRoute component={Home}/>
				{/* <Route path='/signin' onEnter={checkReroute} component={Signin} /> */}
				<Route path='/signin' component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/favorites" component={Favorites} />
				<Route path="/wishlist" component={Wishlist} />
				{/* <Route path="/library/:id" component= {LibraryDynamic} /> */}
				<Route path="/search" component={Search} />



		    </Route>
		</Router>
	</Provider>

  );

export default theRoutes;
