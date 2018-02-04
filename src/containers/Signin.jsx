import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../fire.js';




class Signin extends Component {
	constructor(props) {
	  super(props);


	  this.handleForm = this.handleForm.bind(this);



	}

	componentDidMount() {
		if(fire.auth().currentUser) {
			console.log('User is already logged in.');
			this.props.router.push('/')
		}
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
        <div className = 'body_home'>
			  <div className='row logins rowhome'>
				  <div className='col-md-2 col-lg-3 col-sm-1'></div>
				  <div className='col-md-8 col-lg-6 col-sm-10 homeslate'>
					  <div className= 'registerBox'>

						  <form>
			  				<div className="input-group signup">
			  					<span className="input-group-addon" id="basic-addon1"></span>

			  					 <input type="text" className='form-control' ref="email" placeholder="Enter your email" />
			  				</div>


			  				<div className="input-group signup">
			  					 <span className="input-group-addon" id="basic-addon1"></span>
			  					 <input type="text" ref="password" className="form-control" placeholder="Enter a password" />
			  				</div>

			  			  </form>
						  <div className="buttonContainerSignup">
							  {/* <p> */}
							  	<button className='btn btn-primary btnSignup' onClick={this.handleForm}>Login!</button>
							  {/* </p> */}
							  {/* <p> */}
							   <button className='btn btn-warning btnSignup' onClick={() => this.props.router.push('/signup')}>Register</button>
						  	  {/* </p> */}
						  </div>
						</div>

				  </div>
				  <div className='col-md-2 col-lg-3 col-sm-1'></div>

			  </div>



			</div>





    );
  }

};


export default Signin;
