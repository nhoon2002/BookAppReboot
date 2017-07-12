import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import { Grid, Row, Col } from 'react-bootstrap';
//Push back to home if not logged in.
// if ( (browserHistory.getCurrentLocation().pathname != '/signin') ||  (browserHistory.getCurrentLocation().pathname!= '/signup') ) {
//   console.log('rerouting to home.');
//    browserHistory.push('/');



class Library extends Component {
	constructor(props) {
	  super(props);

    this.state = {};

	}

  componentDidMount() {
    document.body.classList.add('library');
    // When an authentication state has been changed...
    firebase.auth().onAuthStateChanged(firebaseUser => {


       this.props.checkSession(firebaseUser);

       if(firebaseUser) { //if user is logged in...

        console.log('Current user: %s', firebase.auth().currentUser.uid);
          console.log("auth status changed: logged in as: " + firebaseUser.email);

       } else {
          console.log('auth status changed: not logged in');
          this.props.router.push('/')
          console.log('rerouted to home');
       }
     })
  }
  componentWillUnmount() {
    document.body.classList.remove('library');
  }

	render() {
        return (
          <div>
          <Grid>
            <Row className="show-grid">
              <Col md={4} className='leftPanel'>Left</Col>
              <Col md={8} className='rightPanel'>Right</Col>
            </Row>

          </Grid>
        <div className='container libContainer'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 leftPanel'>Left md4</div>
            <div className='col-md-8 col-lg-8 rightPanel'>Right md8</div>
          </div>
        </div>
        </div>

        )
  }

};


export default Library;
