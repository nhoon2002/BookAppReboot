import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PosterDiv from '../components/PosterDiv.jsx';


class PosterField extends Component {
	constructor(props) {
	  super(props);

    this.state = {};

	}



  render() {

    const photoURL = 'https://image.tmdb.org/t/p/w320/';


     return (

        <div>


           {this.props.queryData.length > 0
           ?
           <div className='row'>

             <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
               {this.props.queryData.map((data,i) =>
                 <PosterDiv showMovieModal={this.props.showMovieModal} fullData={data} key={i} posterID={i} imageSrc={photoURL + data.poster_path} posterPath={data.poster_path}/>




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


export default PosterField;
