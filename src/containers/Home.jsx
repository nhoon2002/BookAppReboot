import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import {Button, ButtonToolbar} from 'react-bootstrap';





class Home extends Component {
	constructor(props) {
		super(props)

		this.state = { bcolor: 'black'};


	}


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
        <div className='body_home'>



				  {/* <div className='row homeLogo'>
					  <div className='col-md-4 col-lg-4 col-sm-1'></div>
					  <div className='col-md-4 col-lg-4 col-sm-10 logo-center'>
						  <h1 className='spanLogo'>MovieApp</h1>
					  </div>
					  <div className='col-md-4 col-lg-4 col-sm-1'></div>

				  </div>
 */}

			  {
			  this.props.loginStatus ?
			  <div className='row welcome rowhome'>
				  <div className='col-md-4 col-lg-4 col-sm-1'></div>
				  <div className='col-md-4 col-lg-4 col-sm-10 welcome homeslate'>
					  <div className='welcomeDiv' style={{backgroundColor: 'black'}}>
						  <h2>Welcome Testing</h2>
						  <span><strong><h3>{this.props.currentUser.displayName}!</h3></strong></span>
						  <br/>
							  <img src={this.props.currentUser.providerData[0].photoURL} className='img-circle' alt="Profileimg Circle" />
							  <br/>
							  <hr/>

						  <Button bsStyle='primary' onClick={() => this.props.router.push('/search')}>
							  <span className='buttonSpan'>Start Searching!</span>
						  </Button>
				  		</div>
				  </div>
				  <div className='col-md-4 col-lg-4 col-sm-1'></div>



		  	  </div> /*End Container*/

			  :


				<div className='row logins rowhome'>
					<div className='col-md-2 col-lg-3 col-sm-1'></div>
					<div className='col-md-8 col-lg-6 col-sm-10 homeslate'>
						<div className= 'social-wrap a'>

							 <button id='facebook' onClick={() => this.props.SigninFacebook()}>
								 Log in with Facebook
							 </button>
							 {/* <br/> */}
							 <button id='googleplus' onClick={() => this.props.SigninGoogle()}>
								 Log in with Google+
							 </button>
							 <button id='chaehwa' onClick={() => this.props.router.push('/signin')}>
								 Sign up with email
							 </button>

						 </div>
					</div>
					<div className='col-md-2 col-lg-3 col-sm-1'></div>

				</div>




				}



        </div>


    );
  }

};


export default Home;
