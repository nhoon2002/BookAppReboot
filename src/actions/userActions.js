
import axios from 'axios';
import fetch from 'isomorphic-fetch'
import { browserHistory } from "react-router";
import * as firebase from 'firebase';


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
		} else {
			dispatch({ type: 'SESSION_NULL', payload: ""})
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
