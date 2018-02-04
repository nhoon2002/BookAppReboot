import React, {Component} from 'react';



class ModalButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleFavorites = this.handleFavorites.bind(this);
    this.handleWishlist = this.handleWishlist.bind(this);
    this.close = this.close.bind(this);


  }


  handleFavorites(e){

    var uid = this.props.currentUser.uid;
    var movieID = this.props.movieModalDetails.id;
    var details = this.props.movieModalDetails;
    // this.setState({enabled: false})
    this.props.swapButtons('favorites',false);
    this.props.addMovieToFavorites(uid,movieID,details);
  }
  handleWishlist(e){
    console.log('hi, wishlist is pressed.');
    var uid = this.props.currentUser.uid;
    var movieID = this.props.movieModalDetails.id;
    var details = this.props.movieModalDetails;
    // this.setState({enabled: false})
    this.props.swapButtons('wishlist',false);
    this.props.addMovieToWishlist(uid,movieID,details);
  }
  close() {
    // this.setState({'show': false})
    this.props.closeMovieModal()
    //pass in this prop from the parent which comes from store.
  }

  render() {
    const favoritesEnableCheck = this.props.buttonFavoritesEnabled;
    const wishlistEnableCheck = this.props.buttonWishlistEnabled;

    return (

      <div className='row'>


        <div className='modalButtonsHolder'>
          {wishlistEnableCheck &&
            <button className="btn btn-lg btn-primary btn-modal" type="button" onClick={this.handleWishlist}>Add to Wishlist</button>
          }
          {!wishlistEnableCheck &&
            <button className="btn btn-lg btn-primary btn-modal"
            disabled='true' type="button">Wishlisted!</button>
          }
          {favoritesEnableCheck &&
            <button className="btn btn-lg btn-danger btn-modal" type="button" onClick={this.handleFavorites}>Add to Favorites</button>
          }

          {!favoritesEnableCheck &&
            <button className="btn btn-lg btn-danger btn-modal" type="button" disabled='true'>Favorited!</button>
          }

          <button className="btn btn-lg btn-warning btn-modal" type="button" onClick={this.close}>Close</button>
        </div>





      </div>

    )
  }
}




export default ModalButtons;
