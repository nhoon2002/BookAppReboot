import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import store, { history } from './store.js';
import Home from './containers/Home.jsx';
import Signin from './containers/Signin.jsx';
import Signup from './containers/Signup.jsx';
import Library from './containers/Library.jsx';
import Search from './containers/Search.jsx';


// import {checkSession} from './actions/userActions';
// import * as firebase from 'firebase';
// const checkReroute = () => {
// 	console.log('Checking for existing session before reroute...');
// 	store.dispatch(checkSession(firebase.auth().currentUser));
// }


const theRoutes = (
	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App}>

		      <IndexRoute component={Home}/>
				{/* <Route path='/signin' onEnter={checkReroute} component={Signin} /> */}
				<Route path='/signin' component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/library" component={Library} />
				<Route path="/search" component={Search} />
		


		    </Route>
		</Router>
	</Provider>

  );

export default theRoutes;
