import React from 'react';
import ReactDOM from 'react-dom';

import theRoutes from './routes.jsx';
import Main from './containers/Main.jsx';


// const appEntry = <Router history={history}>{makeRoutes()}</Router>;
ReactDOM.render(
	// <Provider store={store}>
	// {routes}
	theRoutes
	/*</Provider>*/,
	document.getElementById('root')
);
