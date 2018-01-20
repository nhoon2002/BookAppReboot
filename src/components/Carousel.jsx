import React, {Component} from 'react';
import CoverFlow from 'coverflow-react';
import fire from '../fire.js'
class Carousel extends Component {
   constructor(props) {
      super(props)

      this.state = {};

      this.handleClick = this.handleClick.bind(this);

   }
   handleClick(e,index) {
     e.preventDefault();
     console.log(this.props.movies[index])

     fire.database().ref().child('users/').child(`${fire.auth().currentUser.uid}/`).child('movies/').once('value', snapshot => {
       var keys = Object.keys(snapshot.val())
       var targetKey = keys[index];
       console.log(targetKey);
       if(keys.length > 3) {
         console.log('REMOVING FROM CAROUSEL');
         this.props.removeMovieFromLibrary(fire.auth().currentUser.uid, targetKey);
       } else this.props.showNotification('Must have at least 3 movies in Library', 'danger');
     });
   }


   render() {
     let movies = this.props.movies;
     let posters = movies.map(movie =>  `https://image.tmdb.org/t/p/w320${movie.details.poster_path}`) || null;
     let movieTitles = movies.map(movie => <button onClick={() => console.log('hi')}>{movie.details.original_title}</button>) || null;

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
              labelsArr={movieTitles}
              handleSelect={(e,index) => this.handleClick(index)}
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
