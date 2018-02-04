import React, {Component} from 'react';

// import Coverflow from 'react-coverflow';

class PosterDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {hello: true}


    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    var obj = Object.assign(this.state, this.props.fullData);
    this.setState(obj)
  }
  handleClick(e) {
    console.log(this.props.movieIdsF);
    console.log(this.props.movieIdsL);
    console.log(this.props.fullData.id);
    var favoritesEnableCheck = true;
    var wishlistEnableCheck = true;
    if(this.props.movieIdsF.indexOf(this.props.fullData.id) >= 0) {
      favoritesEnableCheck = false;
    }
    if(this.props.movieIdsL.indexOf(this.props.fullData.id) >= 0) {
      wishlistEnableCheck = false;
    }

    this.props.showMovieModal(this.props.fullData, favoritesEnableCheck, wishlistEnableCheck)  //disable button




  }


  render() {
    const nullURL = 'https://placehold.it/320x480?text=';
    return (

      <div className='posterDiv' onClick={this.handleClick} data-posterID={this.props.posterID}>
        {this.props.posterPath
          ?<img className='moviePoster' src={this.props.imageSrc} alt='cover'/>
          :<img className='moviePoster' src={`${nullURL}`+`${this.props.fullData.title}`} alt='nullcover'/>
        }
      </div>

    )
  }
}




export default PosterDiv;
