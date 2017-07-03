import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
// import regisCont from './registerCont.jsx';




class Signup extends Component {
	constructor(props) {
	  super(props);


	  this.handleForm = this.handleForm.bind(this);
	//   this.createAccount = this.createAccount.bind(this);

	}

	componentDidMount() {
		//When an authentication state has been changed...
		firebase.auth().onAuthStateChanged(firebaseUser => {


		   console.log('Current user: %s', firebase.auth().currentUser.uid);


		   if(firebaseUser) { //if user is logged in...

		      console.log("auth status changed: logged in as: " + firebaseUser.email);

		   } else {
		      console.log('auth status changed: not logged in');

		   }

		});
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

			})
			.catch(function (error) {
				console.log(error);
				alert(error.message);
			});


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

					 <button className='btn btn-primary' onClick={this.handleForm}>
						 Create Account!
					 </button>
					 <br />

					 <button className='button'>
						 <Link to='/signin'>Already Have Account.</Link>
					 </button>
				 	 <br />

					 <button className='button'>
						 <Link to='/'>Back to Home.</Link>
					 </button>

            </div>



        </div>

    );
  }

};


export default Signup;
