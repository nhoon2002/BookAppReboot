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
    this.props.showMovieModal(this.props.fullData)


  }


  render() {
    const nullURL = 'https://placehold.it/320x480?text=';
    return (

      <div className='posterDiv' onClick={this.handleClick} data-posterID={this.props.posterID}>
        {this.props.posterPath
          ?<img src={this.props.imageSrc} alt='cover'/>
          :<img src={`${nullURL}`+`${this.props.fullData.title}`} alt='nullcover'/>
        }
      </div>

    )
  }
}




export default PosterDiv;