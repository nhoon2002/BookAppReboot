
import React, { Component } from 'react';
import fire from '../fire.js';
// import PosterDiv from '../components/PosterDiv.jsx';


class PosterField2 extends Component {
	constructor(props) {
	  super(props);

    this.state = {};

	}
  componentDidMount() {

    // console.log(results);

  }


  render() {




     return (

        <div>



           <div className='row'>

             <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
               {this.props.data.map((datum,i) =>
                 <img src={`https://image.tmdb.org/t/p/w640/${datum.poster_path}`} posterPath={data.poster_path}/>




               )}
             </div>

             </div>





        </div>

     )
   }



};


export default PosterField2;
