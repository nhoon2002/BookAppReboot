import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { browserHistory } from "react-router";
import * as firebase from 'firebase';
import promise from 'es6-promise'
promise.polyfill();

const apiKey = require('../../controller/config.js').api

export function sampleAxiosToTmdb() {
	return function(dispatch) {
		console.log('key:', apiKey);
	// 	fetch(`/searchQuery'`
	// 	.then((data) => {
	// 		console.log("TMDB query data:", data);
	// 		// if(data.data.sessionUserId){
	// 		// 	dispatch({ type: "SESSION_EXIST", payload: {
	// 		// 			checkSessionId : data.data.sessionUserId,
	// 		// 			checkSessionUser: data.data.sessionUserInfo
	// 		// 		}
	// 		// 	});
	// 		// }else{
	// 		// 	dispatch({ type: "NO_SESSION" })
	// 		// 	browserHistory.push('/');
	// 		// }
	// 	});
	}
}
export function showMovieModal(data) {
	return function(dispatch) {
		dispatch({ type: 'MOVIEMODAL_ON', payload: {poster_path: data.poster_path, title: data.title, details: data}})
	}
}

export function closeMovieModal() {
	return function(dispatch) {
		dispatch({ type: 'MOVIEMODAL_OFF'})
	}
}


export function fetchQuery(query) {
	return function(dispatch) {
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${query}`)
		.then(function(data) {
			console.log(data);
			if(!data.ok) {
				var error = new Error(data.statusText)
				console.log(error);
				dispatch({ type:'QUERY_FETCH_ERROR', payload: error});

			} else {
				return data.json();
			}

		})
		.then(function(json) {
			console.log('Fetched json:', json);
			if(json.total_results < 1) {
				dispatch({ type:'QUERY_FETCH_ERROR', payload: 'No results were found'});
			} else {
				dispatch({ type:'QUERY_FETCH_SUCCESS', payload: json.results});
			}
		})
	}
}


export function sampleActionDispatch() {
	return function(dispatch) {
		console.log("sampleActionDispatch started");
		dispatch({ type: 'SAMPLE_ACTION_DISPATCH', payload: true });
	}
}

export function sampleAction() {
	return {
		type: 'SAMPLE_ACTION',
		payload: true
	}
 }
export function signOut() {
		return function(dispatch) {
			firebase.auth().signOut(); //signs out current user
			browserHistory.push('/');
			dispatch({ type: 'SESSION_NULL', payload: ""});

		}

 }
export function checkSession(user) {
	return function(dispatch) {
		if (user) {
			dispatch({ type: 'SESSION_EXISTS', payload: user})
			console.log('browserhistory:', browserHistory);
		} else {
			dispatch({ type: 'SESSION_NULL', payload: ""})
			console.log('current:', browserHistory.getCurrentLocation().pathname);


			}

 		}

 }




export function createAccount(inputs) {
  return function(dispatch) {
        dispatch({ type: 'CREATE_ACCOUNT', payload: ""});

  			var auth = firebase.auth();
  			var promise = auth.createUserWithEmailAndPassword(inputs.email, inputs.password)
  			.then(function() {

  				var user = firebase.auth().currentUser;
  				console.log('User:', user);

  				//If successful creation, creates the following children to the user branch (labeled by uid)
  				firebase.database().ref("users").child(user.uid).set({
  					email: inputs.email,
  					username: inputs.username,
  					password: inputs.password
  				});
          dispatch({ type: 'CREATE_ACCOUNT_SUCCESS', payload: { details: inputs, detailsFB: user } });
					browserHistory.push('/');


  			})
  			.catch(function (error) {
  				console.log(error);
  				dispatch({ type: 'CREATE_ACCOUNT_ERROR', payload: error.message})
  			});


  }
}
export function SigninGoogle() {
	return function(dispatch) {
		dispatch({ type: 'GOOGLE_CREATE_ACCOUNT', payload: ""});
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  console.log("google auth details:", user);
		  dispatch({ type: 'GOOGLE_CREATE_ACCOUNT_SUCESSS', payload: user});
		  browserHistory.push('/');
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage);
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  dispatch({ type: 'GOOGLE_CREATE_ACCOUNT_ERROR', payload: errorMessage});
		  // ...
		});
	}
}
export function SigninFacebook() {
	return function(dispatch) {
		dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT', payload: ""});
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the FB API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  console.log("facebook auth details:", user);
		  dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT_SUCESSS', payload: user});
		  browserHistory.push('/');
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage);
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  dispatch({ type: 'FACEBOOK_CREATE_ACCOUNT_ERROR', payload: errorMessage});
		  // ...
		});
	}
}

export function signinAccount(inputs) {
	return function(dispatch) {
		dispatch({ type: 'SIGNIN_ACCOUNT', payload: ""});
	//Clicking the log in button...

	   //firebase authorization requirement
	   var auth = firebase.auth();
	   //Sign in function for firebase
	   var promise = auth.signInWithEmailAndPassword(inputs.email, inputs.password)
	      .then (function(user) {
					 dispatch({ type: 'SIGNIN_ACCOUNT_SUCCESS', payload: user})
	         //Loads the dashboard upon successful signin
	         browserHistory.push('/');

	      })
	      .catch(function (error) {
					 dispatch({ type: 'SIGNIN_ACCOUNT_ERROR', payload: error.message})
	      });
			}




}
