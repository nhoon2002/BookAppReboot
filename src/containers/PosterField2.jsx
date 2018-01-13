
import React, { Component } from 'react';
import fire from '../fire.js';
// import PosterDiv from '../components/PosterDiv.jsx';


class PosterField2 extends Component {
	constructor(props) {
	  super(props);

    this.state = {};

	}
  componentDidMount() {


  }


  render() {




     return (

        <div>




										 {this.props.data
										 ?
										 <div className='row'>

											 <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
												 {this.props.data.map((datum,i) =>
													 <div className='posterDiv' key={i}>
														 <img className='moviePoster' src={`https://image.tmdb.org/t/p/w320/${datum.details.poster_path}`} alt='' />
													 </div>




												 )}
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



};


export default PosterField2;
