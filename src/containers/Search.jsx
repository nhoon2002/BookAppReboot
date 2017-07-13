import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar.jsx'
// import Coverflow from '../components/Coverflow.jsx'



class Search extends Component {
	constructor(props) {
	  super(props);

    this.state = {};

	}

  componentDidMount() {
    document.body.classList.add('search');
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
            <SearchBar
							sampleAxiosToTmdb={this.props.sampleAxiosToTmdb} fetchQuery={this.props.fetchQuery}
							queryData={this.props.queryData}
						 />

						{/* <Coverflow {...this.state} /> */}


           </div>

        )
  }

};


export default Search;
