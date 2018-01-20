import React, {Component} from 'react';
import CoverFlow from 'coverflow-react';
import fire from '../fire.js'
class Carousel extends Component {
   constructor(props) {
      super(props)

      this.state = {labelsArr: []};

      this.handleClick = this.handleClick.bind(this);
      this.handleButton = this.handleButton.bind(this);


   }

   handleButton(movie) {
      console.log('BUTTON CLICKED');
      console.log(movie.details.id);
      // console.log(this.props.movies[index])
      if(this.props.movies.length > 3) {
         fire.database().ref(`users/${fire.auth().currentUser.uid}/movies/`)
            .orderByChild("movieID")
            .equalTo(movie.details.id)
            .once('value', snapshot => {
                var key = Object.keys(snapshot.val())[0]
                console.log(key);
                this.props.removeMovieFromLibrary(fire.auth().currentUser.uid, key);

         });
      } else this.props.showNotification('You should have at least 3 movies in your library!', 'danger')
   }
   handleClick(index) {

     // e.preventDefault();
     console.log('HANDLE CLICKED %s', index);

   }


   render() {
     let movies = this.props.movies;
     let posters = movies.map(movie =>  `https://image.tmdb.org/t/p/w320${movie.details.poster_path}`) || null;
     let buttonsArray = movies.map((movie, i) => <button className='btn btn-danger removeButton' key={i} onClick={() => this.handleButton(movie)}><span id='removeButtonSpan'>x</span></button>) || null;

      return (
        <div>

        {movies
        ?
        <div className='row'>

          <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
            <CoverFlow
              imagesArr={posters}
              direction="horizontal"
              width="100vw"
              emptyMessage="Add some movies first!"
              height="400"
              itemRatio="32:48"
              background="rgba(0, 0, 0, 0)"
              labelsArr={buttonsArray}
              handleSelect={(index) => this.handleClick(index)}
            />
          </div>


         </div>
        :
        <div className='row'>
          <div className='col-md-2 col-lg-2 col-sm-1'></div>
          <div className='col-md-8 col-lg-8 col-sm-10 coverflow'>

          </div>
          <div className='col-md-2 col-lg-2 col-sm-1'></div>
        </div>
        }
      </div>

      )
   }



}

export default Carousel;
