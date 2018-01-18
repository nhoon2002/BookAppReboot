import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import fire from '../fire.js'
import PosterField2 from './PosterField2.jsx';
import Carousel from '../components/Carousel.jsx';




class Library extends Component {
	constructor(props) {
	  super(props);

    this.state = {};



	}
	componentWillMount() {
		firebase.auth().onAuthStateChanged(firebaseUser => {


       this.props.checkSession(firebaseUser); //NOTE: checkSession() must be called first in order to be able to summon {this.props.currentUser}

       if(firebaseUser) { //if user is logged in...

        	console.log('Current user: %s', firebase.auth().currentUser.uid);
          console.log("auth status changed: logged in as: " + firebaseUser.email);
					var user = firebase.auth().currentUser.uid;

					//make this a 'userActions' thing...
					// fire.database().ref(`users/${firebase.auth().currentUser.uid}/movies`).once('value', function(snapshot) {
						this.props.retrieveSnapshot(user);
					//
					// });

       } else {
          console.log('auth status changed: not logged in');
          this.props.router.push('/')
          console.log('rerouted to home');
       }
     })

	}
  componentDidMount() {
    document.body.classList.add('library');
    // When an authentication state has been changed...




  }

  componentWillUnmount() {
    document.body.classList.remove('library');
  }

	render() {
        return (

					<div>
						<Carousel data={this.props.posters} labels={this.props.movieTitles}/>
						{/* <PosterField2 data={this.props.movies} /> */}




					</div>


        )
			}


};


export default Library;
