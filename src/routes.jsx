import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import { Provider } from 'react-redux';
import Home from './containers/Home.jsx';
import store, { history } from './store.js';




const theRoutes = (
	<Provider store={store}>
	  	<Router history={history}>
		    <Route path="/" component={App}>

		      <IndexRoute component={Home}/>



		    </Route>
		</Router>
	</Provider>

  );

export default theRoutes;
