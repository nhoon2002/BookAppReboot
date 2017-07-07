import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import {ButtonToolbar, Button} from 'react-bootstrap';




class Signup extends Component {
	constructor(props) {
	  super(props);


	  this.handleForm = this.handleForm.bind(this);
	//   this.sample = this.sample.bind(this);
	//   this.sampleD = this.sampleD.bind(this);
	  this.logOut = this.logOut.bind(this);

	//   this.createAccount = this.createAccount.bind(this);

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

	// sample() {
	// 	this.props.sampleAction()
	// }
	// sampleD() {
	// 	this.props.sampleActionDispatch()
	// }

	logOut() {
		this.props.signOut()
	}


	handleForm(e){
		// console.log("NAAAAAAAAAME", this.refs.name.value)
		var inputs = {
			email: this.refs.email.value,
			username: this.refs.username.value,
			password: this.refs.password.value,
			confirmpw: this.refs.confirm.value
		}

		console.log("Credentials:", inputs);
		// TODO: send to store.
		// this.props.SOMETHING(fieldInputs);
		this.props.createAccount(inputs);

	}
	render() {



        return (
        <div>

            <div className="jumbotron">

                <h3>Signup Page.</h3>
					 <div>
						 <form>
							 <div className="input-group signup">
								 <span className="input-group-addon" id="basic-addon1">Email</span>

								  <input type="text" className='form-control' ref="email" placeholder="Enter your email" />
							 </div>

							 <div className="input-group signup">
								 <span className="input-group-addon" id="basic-addon1">Username</span>

								  <input type="text" className='form-control' ref="username" placeholder="Select a username" />
							 </div>


							 <div className="input-group signup">
								  <span className="input-group-addon" id="basic-addon1">Password</span>
								  <input type="text" ref="password" className="form-control" placeholder="Enter a password" />
							 </div>

							 <div className="input-group signup">
								  <span className="input-group-addon" id="basic-addon1">Confirm Password</span>
								  <input type="text" ref="confirm" className="form-control" placeholder="Confirm your password" />
							 </div>

							  <div className="form-check">
								 <label className="form-check-label">
								   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="private" />
								    Testing
								 </label>
							  </div>
						 </form>
					 </div>

					 {/* Buttons */}
					 <ButtonToolbar>
						 <Button bsStyle='danger' onClick={this.handleForm}>
							 Create Account!
						 </Button>

						 {/* <button bsStyle='btn btn-warning' onClick={this.sample}>
							 Sample Action!
						 </button>
						 <br />
						 <button bsStyle='btn btn-warning' onClick={this.sampleD}>
							 Sample Action Dispatch!
						 </button>
						 <br /> */}
						 <Button bsStyle='warning' onClick={this.logOut}>
							 Logout!
						 </Button>
					 </ButtonToolbar>
					 <br/>
					 <ButtonToolbar>

						 <Button bsStyle='info'>
							 <Link to='/signin'><span className='buttonSpan'>Already Have Account.</span></Link>
						 </Button>


						 <Button bsStyle='info'>
							 <Link to='/'><span className='buttonSpan'>Back to Home.</span></Link>
						 </Button>
					 </ButtonToolbar>

            </div>



        </div>

    );
  }

};


export default Signup;
