import React, { Component } from 'react';
import {Link} from 'react-router';
// import * as firebase from 'firebase';
import fire from '../fire.js'

import CarouselFavorites from '../components/Library/CarouselFavorites.jsx';
// import CarouselWishlist from '../components/Library/CarouselWishlist.jsx';




class Favorites extends Component {
	constructor(props) {
	  super(props);

    this.state = {};



	}
	componentWillMount() {




	}
  componentDidMount() {
    document.body.classList.add('favorites');



  }

  componentWillUnmount() {
    document.body.classList.remove('favorites');
  }

	render() {
        return (

					<div>
						<CarouselFavorites movies = {this.props.moviesF} posters={this.props.postersF} movieTitles={this.props.movieTitlesF} removeMovieFromLibrary = {this.props.removeMovieFromLibrary} showNotification = {this.props.showNotification}/>
						{/* <CarouselWishlist movies = {this.props.movies} posters={this.props.posters} movieTitles={this.props.movieTitles} removeMovieFromLibrary = {this.props.removeMovieFromLibrary} showNotification = {this.props.showNotification}/> */}





					</div>


        )
			}


};


export default Favorites;
