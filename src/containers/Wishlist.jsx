import React, { Component } from 'react';
import {Link} from 'react-router';
// import * as firebase from 'firebase';
import fire from '../fire.js'

// import CarouselFavorites from '../components/Library/CarouselFavorites.jsx';
import CarouselWishlist from '../components/Library/CarouselWishlist.jsx';




class Wishlist extends Component {
	constructor(props) {
	  super(props);

    this.state = {};



	}
	componentWillMount() {




	}
  componentDidMount() {
    document.body.classList.add('wishlist');



  }

  componentWillUnmount() {
    document.body.classList.remove('wishlist');
  }

	render() {
        return (

					<div>
						{/* <CarouselFavorites movies = {this.props.movies} posters={this.props.posters} movieTitles={this.props.movieTitles} removeMovieFromLibrary = {this.props.removeMovieFromLibrary} showNotification = {this.props.showNotification}/> */}
						<CarouselWishlist movies = {this.props.moviesL} posters={this.props.postersL} movieTitles={this.props.movieTitlesL} removeMovieFromLibrary = {this.props.removeMovieFromLibrary} showNotification = {this.props.showNotification}/>





					</div>


        )
			}


};


export default Wishlist;
