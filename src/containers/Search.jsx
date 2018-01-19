import React, { Component } from 'react';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar.jsx'
import PosterField from './PosterField.jsx'
// import Lightbox from 'react-images';
import MovieModal from '../components/MovieModal.jsx'



class Search extends Component {
	constructor(props) {
	  super(props);

    this.state = {

		};
		this.closeBox = this.closeBox.bind(this); //LIGHTBOX ONLY
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
    document.body.classList.remove('search'); //For handling background-image changes
  }

	closeBox() {
		this.props.closeMovieModal(); //LIGHTBOX ONLY
	}

	render() {

        return (
          <div>
						{/* <Lightbox
						  images={[
						    {
									src: this.props.lightboxSrc,
									caption: this.props.lightboxCap
								}

						  ]}
						  isOpen={this.props.lightboxIsOpen}
						  onClose={this.closeBox}
							backdropClosesModal={true}


						/> */}
						<MovieModal {...this.props}/>

            <SearchBar
							sampleAxiosToTmdb={this.props.sampleAxiosToTmdb} fetchQuery={this.props.fetchQuery}
							queryData={this.props.queryData}
							showNotification={this.props.showNotification}
						 />
						<br/>

						<PosterField showMovieModal={this.props.showMovieModal} queryData={this.props.queryData} />


           </div>

        )
  }

};


export default Search;
