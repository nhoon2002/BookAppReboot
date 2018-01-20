import React, { Component } from 'react';
import {Link} from 'react-router';
// import * as firebase from 'firebase';
import fire from '../fire.js'
import PosterField2 from './PosterField2.jsx';
import Carousel from '../components/Carousel.jsx';




class Library extends Component {
	constructor(props) {
	  super(props);

    this.state = {};



	}
	componentWillMount() {




	}
  componentDidMount() {
    document.body.classList.add('library');



  }

  componentWillUnmount() {
    document.body.classList.remove('library');
  }

	render() {
        return (

					<div>
						<Carousel movies = {this.props.movies} posters={this.props.posters} movieTitles={this.props.movieTitles} removeMovieFromLibrary = {this.props.removeMovieFromLibrary} showNotification = {this.props.showNotification}/>
						{/* <PosterField2 data={this.props.movies} /> */}




					</div>


        )
			}


};


export default Library;
