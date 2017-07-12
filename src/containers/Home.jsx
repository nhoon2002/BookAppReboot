import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import {Button, ButtonToolbar} from 'react-bootstrap';





class Home extends Component {
	constructor(props) {
		super(props)

		this.state = { bcolor: 'black'};

		this.handleHover = this.handleHover.bind(this);
		this.handleLeave = this.handleLeave.bind(this);
	}

	handleHover() {
		this.setState({bcolor: 'green'})
	}
	handleLeave() {
		this.setState({bcolor: 'black'})
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
        <div>

			  {
			  this.props.loginStatus ?
			  <div className="jumbotron homeBanner">
			  		<h1>Welcome, {this.props.currentUser.displayName}!</h1>
						<img src={this.props.currentUser.photoURL} className='img-circle' alt="Profileimg Circle" />
						<br/>

					<Button bsStyle='primary' onClick={() => this.props.router.push('/search')}>
						<span className='buttonSpan'>Start Searching!</span>
					</Button>
		  	  </div>

			  :

			   <div className="jumbotron homeBanner" id={this.state.bcolor} onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave} >
				  <h1>Movie App.</h1>
				  <div className= 'social-wrap a'>
						{/* <ButtonToolbar>
							 <Button bsStyle='primary'>
								 <Link to='/signin'><span className='buttonSpan'>Log In</span></Link>
							 </Button>

							 <Button bsStyle='success'>
								 <Link to='/signup'><span className='buttonSpan'>Sign Up</span></Link>
							 </Button>
						</ButtonToolbar> */}
						<button id='facebook' onClick={() => this.props.SigninFacebook()}>
							Log in with Facebook
						</button>
						{/* <br/> */}
						<button id='googleplus' onClick={() => this.props.SigninGoogle()}>
							Log in with Google+
						</button>
						<button id='chaehwa' onClick={() => this.props.router.push('/signin')}>
							Log in with &hearts;채채&hearts;
						</button>

					</div>
				</div>

				}



        </div>

    );
  }

};


export default Home;
