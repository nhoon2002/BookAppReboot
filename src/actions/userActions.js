import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { browserHistory } from "react-router";
import * as firebase from 'firebase';
import promise from 'es6-promise'
promise.polyfill();
// import fire from '../fire.js'

const apiKey = require('../../controller/config.js').api

export function sampleAxiosToTmdb() {
	return function(dispatch) {
		console.log('key:', apiKey);

	}
}
export function showNotification(content, type) {
	console.log('Triggered notification action.');
	// setTimeout(() => hideNotification(), 3000);
	return ((dispatch) => {
		dispatch({type: 'NOTIFYING', payload: {type: type, content: content}})




	})
}

export function hideNotification() {
	return function(dispatch) {
		dispatch({type: 'DISMISSING', payload: false})

	}
}
export const getSnapshot = (user, dispatch) => {
	//This function is called as a callback when user clicks button to add movie to somewhere.
	console.log('--------------------------');
	console.log('getSnapshot called');
	console.log('--------------------------');

	firebase.database().ref(`users/${user}/movies/favorites`).once('value').then(function(snapshot) {
		if(snapshot.val()) {
			var dats = Object.values(snapshot.val());
			// this.setState({data:dats}) TODO: make this a userActions thing.

			var posters = dats.map(movie => `https://image.tmdb.org/t/p/w320${movie.details.poster_path}`)
			console.log('Posters: %s', posters);
			var movieTitles = dats.map(movie => movie.details.original_title)
			var movieIds = dats.map(movie => movie.details.id)
			console.log('Titles: %s', movieTitles);
			console.log('Movie Ids: %s', movieIds);
			dispatch({ type: 'FB_SNAP_RETRIEVED_FAVORITES', payload: {movies: dats, posters: posters, movieTitles: movieTitles, movieIds: movieIds}})

		} else {
			dispatch({ type: 'FB_SNAP_RETRIEVED_FAVORITES', payload: {movies: [], posters: [], movieTitles: [], movieIds: []}})
		}
	})
	firebase.database().ref(`users/${user}/movies/wishlist`).once('value').then(function(snapshot) {
		if(snapshot.val()) {
			var dats = Object.values(snapshot.val());
			// this.setState({data:dats}) TODO: make this a userActions thing.

			var posters = dats.map(movie => `https://image.tmdb.org/t/p/w320${movie.details.poster_path}`)
			console.log('Posters: %s', posters);
			var movieTitles = dats.map(movie => movie.details.original_title)
			var movieIds = dats.map(movie => movie.details.id)
			console.log('Titles: %s', movieTitles);
			console.log('Movie Ids: %s', movieIds);
			dispatch({ type: 'FB_SNAP_RETRIEVED_WISHLIST', payload: {movies: dats, posters: posters, movieTitles: movieTitles, movieIds: movieIds}})

		} else {
			dispatch({ type: 'FB_SNAP_RETRIEVED_WISHLIST', payload: {movies: [], posters: [], movieTitles: [], movieIds: []}})
		}
	})
}


export const retrieveSnapshot = (user, route) => {
	//This function can be run from any route/component
	console.log('--------------------------');
	console.log('retrieveSnapshot called');
	console.log('--------------------------');

	return function(dispatch) {
		console.log('retrieveSnapshot dispatching...'); firebase.database().ref(`users/${user}/movies/${route}`).once('value', snapshot =>  {
		console.log(snapshot.val());
		if(snapshot.val() == null){
			console.log('Snapshot returned null.');
			dispatch({type: 'NOTIFYING', payload: {type: 'warning', content: 'Try adding some movies to your library first!'}})

		} else {

			var dats = Object.values(snapshot.val());
			// this.setState({data:dats}) TODO: make this a userActions thing.

			var posters = dats.map(movie => `https://image.tmdb.org/t/p/w320${movie.details.poster_path}`)
			console.log('Posters: %s', posters);
			var movieTitles = dats.map(movie => movie.details.original_title)
			var movieIds = dats.map(movie => movie.details.id)
			console.log('Titles: %s', movieTitles);
			console.log('Movie Ids: %s', movieIds);
			if(route == 'favorites' ) {
				dispatch({ type: 'FB_SNAP_RETRIEVED_FAVORITES', payload: {movies: dats, posters: posters, movieTitles: movieTitles, movieIds: movieIds}})
			} else if (route == 'wishlist') {
				dispatch({ type: 'FB_SNAP_RETRIEVED_WISHLIST', payload: {movies: dats, posters: posters, movieTitles: movieTitles, movieIds: movieIds}})
			}

		}

	})
}

}



export function showMovieModal(data, fav, list) {
	return function(dispatch) {
		dispatch({ type: 'MOVIEMODAL_ON', payload: {poster_path: data.poster_path, title: data.title, details: data, enabledF: fav, enabledL: list }})
	}
}
export function swapButtons(type, val) {
	return function(dispatch) {
		if(type == 'favorites') dispatch({type: 'BUTTON_SWAP_FAVORITES', payload: val})
		else if(type == 'wishlist') dispatch({type:'BUTTON_SWAP_WISHLIST', payload: val})

	}
}

export function closeMovieModal() {
	return function(dispatch) {
		dispatch({ type: 'MOVIEMODAL_OFF'})
	}
}

export const addMovieToFavorites = (uid, movieID, details) => {
	return ((dispatch) => {
		firebase.database().ref(`users/${uid}/movies/favorites`).push({movieID: movieID, details: details});
		getSnapshot(uid, dispatch);
		dispatch({type: 'BUTTON_SWAP_FAVORITES', payload: false})
		dispatch({type: 'NOTIFYING', payload: {type: 'success', content: 'Sucessfully added movie to the Library!'}})
	})
}
export const addMovieToWishlist = (uid, movieID, details) => {
	console.log('RUNNING WISHLIST');
	return ((dispatch) => {
		firebase.database().ref(`users/${uid}/movies/wishlist`).push({movieID: movieID, details: details});
		getSnapshot(uid, dispatch);
		dispatch({type: 'BUTTON_SWAP_WISHLIST', payload: false})
		dispatch({type: 'NOTIFYING', payload: {type: 'success', content: 'Sucessfully added movie to the Library!'}})
	})
}
export const removeMovieFromLibrary = (uid, targetKey, route) => {
	console.log('beforeDispatch');
	return ((dispatch) => {
		console.log('inDispatch');
		firebase.database().ref(`users/${uid}/movies/${route}/`).child(targetKey).remove();
		getSnapshot(uid, dispatch);

		dispatch({type: 'NOTIFYING', payload: {type: 'success', content: 'Sucessfully removed movie from the Library!'}})
	})
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
			dispatch({ type: 'LOGGED_OUT_CLEAR', payload: ""});

		}

 }
export function checkSession() {
	return function(dispatch) {

		let firebaseUser = firebase.auth().currentUser;
		if (firebaseUser) {
			getSnapshot(firebaseUser.uid, dispatch)
			dispatch({ type: 'SESSION_EXISTS', payload: firebaseUser})
			console.log('browserhistory:', browserHistory);
			console.log('Auth status changed: logged in as: ' + firebaseUser.email);
		} else {
			dispatch({ type: 'SESSION_NULL', payload: ""})
			console.log('Auth status changed: not logged in.');
			browserHistory.push('/');


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
  					name: inputs.username
  					// password: inputs.password
  				});
          dispatch({ type: 'CREATE_ACCOUNT_SUCCESS', payload: { details: inputs, detailsFB: user } });
					dispatch({ type: 'SESSION_EXISTS', payload: user})
					browserHistory.push('/');


  			})
  			.catch(function (error) {
  				console.log(error);
  				dispatch({ type: 'CREATE_ACCOUNT_ERROR', payload: error.message})
					dispatch({type: 'NOTIFYING', payload: {type: 'danger', content: error.message}})
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
			var dbRef = firebase.database().ref(`users/${user.uid}/`)
			dbRef.once('value').then(function(snapshot) {
				if(!snapshot.val()) {
					console.log('User database info does not exist yet. Setting initial object...');
					dbRef.set({
						email: user.email,
						name: user.displayName,

					})
					.then(
						function(success) {
							console.log('DBREFSET SUCCESS');
						}
					)
					.catch(function(error) {
						console.log('Encounted error: dbREF', error);
					})
				}
			})



		  console.log("google auth details:", user);
		  dispatch({ type: 'GOOGLE_CREATE_ACCOUNT_SUCESSS', payload: user});
			dispatch({type: 'SESSION_EXISTS', payload: user});
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
		 //INITIALIZE FIREBASE USER DATABASE
		 const dbRef = firebase.database().ref(`users/${user.uid}/`);
		 // console.log('WOOOOOOO');
		 dbRef.once('value').then(function(snapshot) {
			 console.log(snapshot.val());
			 if(!snapshot.val()) {
				 console.log('User database info does not exist yet. Setting the initial object...');
				 dbRef.set({
					 email: user.email,
					 name: user.displayName
				 })
				 .then(
					 function(success) {
						 console.log('DBREFSET SUCCESS');
					 }
				 )
				 .catch(
					 function(error) {
						 console.log('Encounted error: dbRef');
					 }
				 )
			 }
		 });


		 dispatch({ type: 'SESSION_EXISTS', payload: user});
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
export function SigninGithub() {
 return function(dispatch) {
	 dispatch({ type: 'GITHUB_CREATE_ACCOUNT', payload: ""});
	 var provider = new firebase.auth.GithubAuthProvider();
	 firebase.auth().signInWithPopup(provider).then(function(result) {
		 // This gives you a Facebook Access Token. You can use it to access the FB API.
		 var token = result.credential.accessToken;
		 // The signed-in user info.
		 var user = result.user;
		 console.log("github auth details:", user);
		 dispatch({ type: 'GITHUB_CREATE_ACCOUNT_SUCESSS', payload: user});
		 //INITIALIZE FIREBASE USER DATABASE
		 const dbRef = firebase.database().ref(`users/${user.uid}/`);
		 // console.log('WOOOOOOO');
		 dbRef.once('value').then(function(snapshot) {
			 console.log(snapshot.val());
			 if(!snapshot.val()) {
				 console.log('User database info does not exist yet. Setting the initial object...');
				 dbRef.set({
					 email: user.email,
					 name: user.displayName
				 })
				 .then(
					 function(success) {
						 console.log('DBREFSET SUCCESS');
					 }
				 )
				 .catch(
					 function(error) {
						 console.log('Encounted error: dbRef');
					 }
				 )
			 }
		 });


		 dispatch({ type: 'SESSION_EXISTS', payload: user});
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
		 dispatch({ type: 'GITHUB_CREATE_ACCOUNT_ERROR', payload: errorMessage});
		 // ...
	 });
 }
}
export function signinDemo() {
	return function(dispatch) {
		dispatch({type:'SIGNIN_ACCOUNT', payload: ""})
		//firebase authorization requirement
			var auth = firebase.auth();
			//Sign in function for firebase
			var promise = auth.signInWithEmailAndPassword('demo@demo.com','password')
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
