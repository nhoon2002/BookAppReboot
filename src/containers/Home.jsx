import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import {Button, ButtonToolbar} from 'react-bootstrap';





class Home extends Component {
	componentDidMount() {
		// When an authentication state has been changed...
		firebase.auth().onAuthStateChanged(firebaseUser => {


			 this.props.checkSession(firebaseUser);

		   if(firebaseUser) { //if user is logged in...

				console.log('Current user: %s', firebase.auth().currentUser.uid);
		      console.log("auth status changed: logged in as: " + firebaseUser.email);

		   } else {
		      console.log('auth status changed: not logged in');

		   }

		});
	}
	render() {



        return (
        <div>

			  {
			  this.props.loginStatus ?
			  <div className="jumbotron homeBanner">
			  		<h1>Welcome, {this.props.currentUser.email.split('@')[0]}!</h1>
					<Button bsStyle='primary' onClick={this.props.signOut}>
						<span className='buttonSpan'>Log Out</span>
					</Button>
		  	  </div>

			  :

			   <div className="jumbotron homeBanner">
				  <h1>Movie App.</h1>
					<ButtonToolbar>
						 <Button bsStyle='primary'>
							 <Link to='/signin'><span className='buttonSpan'>Log In</span></Link>
						 </Button>
						 <Button bsStyle='success'>
							 <Link to='/signup'><span className='buttonSpan'>Sign Up</span></Link>
						 </Button>
					</ButtonToolbar>
				</div>

				}



        </div>

    );
  }

};


export default Home;
