import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './containers/App.jsx';

import Home from './containers/Home.jsx';




const theRoutes = (

	  	<Router history={history}>
		    <Route path="/" component={App}>

		      <IndexRoute component={Home}/>



		    </Route>
		</Router>

  );

export default theRoutes;
