import React, { Component } from 'react';
// import axios from 'axios';
import fire from '../fire.js'
import ModalButtons from '../components/ModalButtons.jsx';

import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

class MovieModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: 1

    }

    this.close = this.close.bind(this)



  }

  componentWillReceiveProps() {
    console.log('Received Prop');
    this.setState({key: 2})
  }


  close() {
    this.props.closeMovieModal()
  }





  render() {



      return (
        <div>



          <Modal dialogClassName='modal-lightbox' show={this.props.movieModalIsOpen} onHide={this.close}>
            <Modal.Header closeButton>
              {/* <Modal.Title>I'm the Title in the Header</Modal.Title> */}
              {/* <Notification {..this.props}/> */}
            </Modal.Header>
            <Modal.Body>
              <div className='row'>


                  <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12 modalPosterHolder'>
                    {this.props.movieModalDetails.poster_path
                      ?<img id='modalPoster' src={this.props.movieModalSrc} alt='' />
                      :<img id='modalPoster' src={`https://placehold.it/720x960?text=${this.props.movieModalDetails.title}`} alt='' />
                    }

                  </div>

                  <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12 modalDetailsHolder'>


                    <div className='modalDetails'>
                      {this.props.movieModalDetails.original_title === this.props.movieModalDetails.title
                        ?<p><span className='detailTag'>Original Title:</span> {this.props.movieModalDetails.original_title}
                        </p>
                        :<p><span className='detailTag'>Original Title:</span> {this.props.movieModalDetails.title} [{this.props.movieModalDetails.original_title}]
                        </p>


                      }
                      <p><span className='detailTag'>Release Date:</span> {this.props.movieModalDetails.release_date}
                      </p>
                      <p id='pSynopsis'><span className='detailTag' id='detail-synopsis'>Synopsis:</span><br/>
                      {this.props.movieModalTrunc}
                      </p>

                    </div>



                  </div>


              </div> {/* End row */}
            <ModalButtons key={this.state.key} buttonEnabled={this.props.buttonEnabled} addMovieToLibrary={this.props.addMovieToLibrary} currentUser = {this.props.currentUser} movieModalDetails = {this.props.movieModalDetails} closeMovieModal = {this.props.closeMovieModal} showMovieModal = {this.props.showMovieModal} swapButtons = {this.props.swapButtons}/>

            </Modal.Body>
            {/* <Modal.Footer>
              ------------Footer Text-------------------
            </Modal.Footer> */}
          </Modal>


      </div>


      );
    }

}

export default MovieModal;
