import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import fire from '../fire.js'
// import PosterField2 from './PosterField2.jsx';
//Push back to home if not logged in.
// if ( (browserHistory.getCurrentLocation().pathname != '/signin') ||  (browserHistory.getCurrentLocation().pathname!= '/signup') ) {
//   console.log('rerouting to home.');
//    browserHistory.push('/');



class Library extends Component {
	constructor(props) {
	  super(props);

    this.state = {data: ''};


		this.retrieveSnapshot = this.retrieveSnapshot.bind(this);
	}

  componentDidMount() {
    document.body.classList.add('library');
    // When an authentication state has been changed...
    firebase.auth().onAuthStateChanged(firebaseUser => {


       this.props.checkSession(firebaseUser); //NOTE: checkSession() must be called in order to be able to summon {this.props.currentUser}

       if(firebaseUser) { //if user is logged in...

        	console.log('Current user: %s', firebase.auth().currentUser.uid);
          console.log("auth status changed: logged in as: " + firebaseUser.email);

					//make this a 'userActions' thing...
					// fire.database().ref(`users/${firebase.auth().currentUser.uid}/movies`).once('value', function(snapshot) {
					// 	this.retrieveSnapshot(snapshot.val());
					//
					// });

       } else {
          console.log('auth status changed: not logged in');
          this.props.router.push('/')
          console.log('rerouted to home');
       }
     })



  }
	retrieveSnapshot() {
		fire.database().ref(`users/${firebase.auth().currentUser.uid}/movies`).once('value', snapshot =>  {

			var dats = Object.values(snapshot.val());
			this.setState({data:dats})


		});

	}
  componentWillUnmount() {
    document.body.classList.remove('library');
  }

	render() {
        return (

					<div>
						<button onClick={this.retrieveSnapshot}>HI</button>
						{this.state.data
						?
						<div className='row'>

							<div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
								{this.state.data.map((datum,i) =>
									<div className='posterDiv' key={i}>
										<img src={`https://image.tmdb.org/t/p/w320/${datum.poster_path}`} alt='' />
									</div>




								)}
							</div>

							</div>
						:
						<div className='row'>
							<div className='col-md-2 col-lg-2 col-sm-1'></div>
							<div className='col-md-8 col-lg-8 col-sm-10 coverflow'>
									<h1>HI</h1>
							</div>
							<div className='col-md-2 col-lg-2 col-sm-1'></div>
						</div>
						}



					</div>


        )
			}


};


export default Library;
