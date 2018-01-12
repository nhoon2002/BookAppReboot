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
        <div className = 'body_home'>
			  <div className='row logins rowhome'>
				  <div className='col-md-2 col-lg-3 col-sm-1 col-xs-1' ></div>
				  <div className='col-md-8 col-lg-6 col-sm-10 col-xs-10 homeslate'>
					  <div className= 'registerBox'>

						  <form>
						  	<div className="input-group signup">
						  		<span className="input-group-addon" id="basic-addon1"></span>

						  		 <input type="text" className='form-control' ref="email" placeholder="Enter your email" />
						  	</div>

						  	<div className="input-group signup">
						  		<span className="input-group-addon" id="basic-addon1"></span>

						  		 <input type="text" className='form-control' ref="username" placeholder="Select a username" />
						  	</div>


						  	<div className="input-group signup">
						  		 <span className="input-group-addon" id="basic-addon1"></span>
						  		 <input type="text" ref="password" className="form-control" placeholder="Enter a password" />
						  	</div>

						  	<div className="input-group signup">
						  		 <span className="input-group-addon" id="basic-addon1"></span>
						  		 <input type="text" ref="confirm" className="form-control" placeholder="Confirm your password" />
						  	</div>

						  	 {/* <div className="form-check">
						  		<label className="form-check-label">
						  		  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="private" />
						  			Testing
						  		</label>
						  	 </div> */}
						  </form>
						  <div className="buttonContainerSignup">
							  {/* <p> */}
							  	<button className='btn btn-primary btnSignup' onClick={this.handleForm}>Register!</button>
							  {/* </p> */}
							  {/* <p> */}
							   <button className='btn btn-warning btnSignup' onClick={() => this.props.router.push('/signin')}>Login</button>
						  	  {/* </p> */}
						  </div>
						</div>

				  </div>
				  <div className='col-md-2 col-lg-3 col-sm-1 col-xs-1'></div>

			  </div>

        </div>

    );
  }

};


export default Signup;
