import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import {Button, ButtonToolbar} from 'react-bootstrap';





class Home extends Component {
	constructor(props) {
		super(props)

		this.state = { bcolor: 'black', photoURL: 'https://placehold.it/100x100/'};


	}


	componentDidMount() {


		
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
			  <div className='row logins rowhome'>
				  <div className='col-md-4 col-lg-4 col-sm-1'></div>
				  <div className='col-md-4 col-lg-4 col-sm-10 welcome homeslate'>
					  {/* <div className='welcomeDiv' style={{backgroundColor: 'black'}}> */}


						  <br/>
							  <img src={this.props.currentUser.providerData[0].photoURL || 'http://www.kiet.edu/images/default.jpg'} className='img-circle homeImgCircle' alt="Profileimg Circle" />
							  <br/>
							  <hr/>

						  <Button bsStyle='primary' onClick={() => this.props.router.push('/search')}>
							  <span className='buttonSpan'>Start Searching!</span>
						  </Button>
				  		{/* </div> */}
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
							 <button id='chaehwa' onClick={() => this.props.router.push('/signup')}>
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
