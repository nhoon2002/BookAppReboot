import React, { Component } from 'react';
import {Link} from 'react-router';
import fire from '../fire.js';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar.jsx'
import PosterField from './PosterField.jsx'
// import Lightbox from 'react-images';
import MovieModal from './MovieModal.jsx'



class Search extends Component {
	constructor(props) {
	  super(props);

    this.state = {

		};

	}

  componentDidMount() {
    document.body.classList.add('search');

       if(fire.auth().currentUser) { //if user is logged in...
				 console.log('FROM SEARCH.JSX');
				 this.props.retrieveSnapshot(fire.auth().currentUser.uid);

       } else {

       }

  }
  componentWillUnmount() {
    document.body.classList.remove('search'); //For handling background-image changes
  }


	render() {

        return (
          <div>

						<MovieModal {...this.props}/>

            <SearchBar
							sampleAxiosToTmdb={this.props.sampleAxiosToTmdb} fetchQuery={this.props.fetchQuery}
							queryData={this.props.queryData}
							showNotification={this.props.showNotification}
						 />
						<br/>

						<PosterField {...this.props} />


           </div>

        )
  }

};


export default Search;
