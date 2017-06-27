import React from 'react';
import ReactDOM from 'react-dom';

import theRoutes from './routes.jsx';
import Main from './containers/Main.jsx';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAzsa7osbBbtM_lol3Y89Fx_gWDgidDpSg",
  authDomain: "bookappreboot.firebaseapp.com",
  databaseURL: "https://bookappreboot.firebaseio.com",
  projectId: "bookappreboot",
  storageBucket: "",
  messagingSenderId: "427837297237"
};

firebase.initializeApp(config)

ReactDOM.render(

	theRoutes,
	document.getElementById('root')
);
