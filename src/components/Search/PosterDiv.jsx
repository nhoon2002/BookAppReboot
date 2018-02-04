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
    console.log(this.props.movieIds);
    console.log(this.props.fullData.id);
    if(this.props.movieIds.indexOf(this.props.fullData.id) >= 0) {
      console.log('Movie index was found.');
        this.props.showMovieModal(this.props.fullData, false)  //disable button
    } else {
      console.log('Movie not found in lib');
      this.props.showMovieModal(this.props.fullData, true)
    } //not disabled



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
