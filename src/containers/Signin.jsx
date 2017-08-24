import React, { Component } from 'react';
import {Link} from 'react-router';
// import * as firebase from 'firebase';
import fire from '../fire.js';




class Signin extends Component {
	constructor(props) {
	  super(props);


	  this.handleForm = this.handleForm.bind(this);

	  this.logOut = this.logOut.bind(this);


	}

	componentDidMount() {
		// When an authentication state has been changed...
		fire.auth().onAuthStateChanged(firebaseUser => {


			 this.props.checkSession(firebaseUser);

		   if(firebaseUser) { //if user is logged in...

				console.log('Current user: %s', fire.auth().currentUser.uid);
		      console.log("auth status changed: logged in as: " + firebaseUser.email);

		   } else {
		      console.log('auth status changed: not logged in');

		   }

		});
	}


	logOut() {
		this.props.signOut()
	}


	handleForm(e){
		// console.log("NAAAAAAAAAME", this.refs.name.value)
		var inputs = {
			email: this.refs.email.value,
			password: this.refs.password.value,

		}

		console.log("Credentials:", inputs);
		// TODO: send to store.
		// this.props.SOMETHING(fieldInputs);
		this.props.signinAccount(inputs);

	}
	render() {



        return (
        <div className = 'container'>

            <div className="jumbotron">

                <h3>Signin Page.</h3>
					 <div>
						 <form>
							 <div className="input-group signup">
								 <span className="input-group-addon" id="basic-addon1">Email</span>

								  <input type="text" className='form-control' ref="email" placeholder="Enter your email" />
							 </div>


							 <div className="input-group signup">
								  <span className="input-group-addon" id="basic-addon1">Password</span>
								  <input type="text" ref="password" className="form-control" placeholder="Enter a password" />
							 </div>




						 </form>
					 </div>

					 {/* Buttons */}

					 <button className='btn btn-primary' onClick={this.handleForm}>
						 Sign in!
					 </button>
					 <br/>
					 <br />
					 or
					 <br />
					 <br />

					 <button className='btn btn-danger' onClick={() => this.props.router.push('/signup')}>
						 Create a new account.
					 </button>
					 <br />
					 <br />
					 <button className='button btn-success' onClick={() => this.props.router.push('/')}>
						 Go Back
					 </button>

            </div>



        </div>

    );
  }

};


export default Signin;
