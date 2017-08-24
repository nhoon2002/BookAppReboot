import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

class MovieModal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.handleForm = this.handleForm.bind(this);

  }


  handleForm(e){
    alert('handleform clicked!')
    console.log(this.props.movieModalDetails);
  }

  close() {
    // this.setState({'show': false})
    this.props.closeMovieModal()
    //pass in this prop from the parent which comes from store.
  }

  open() {

  }

  render() {

      return (
        <div>



          <Modal dialogClassName='modal-lightbox' show={this.props.movieModalIsOpen} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>I'm the Title in the Header</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='row'>


                  <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12 modalPosterHolder'>
                    {this.props.movieModalDetails.poster_path
                      ?<img id='modalPoster' src={this.props.movieModalSrc} alt='' />
                      :<img id='modalPoster' src={`https://placehold.it/720x960?text=${this.props.movieModalDetails.title}`} alt='' />
                    }
                  </div>

                  <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12 modalDetailsHolder'>

                    <div className='modalDetails'>
                      {this.props.movieModalDetails.original_title === this.props.movieModalDetails.title
                        ?<p><span className='detailTag'>Original Title:</span> {this.props.movieModalDetails.original_title}
                        </p>
                        :<p><span className='detailTag'>Original Title:</span> {this.props.movieModalDetails.title} [{this.props.movieModalDetails.original_title}]
                        </p>


                      }
                      <p><span className='detailTag'>Release Date:</span> {this.props.movieModalDetails.release_date}
                      </p>
                      <p><span className='detailTag'>Synopsis:</span><br/>
                      {this.props.movieModalDetails.overview}
                      </p>

                    </div>


                  </div>


              </div> {/* End row */}
              <div className='modalButtonsHolder'>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleForm}>HandleForm</button>
                <button className="btn btn-lg btn-warning btn-block" type="button" onClick={this.close}>Close</button>
              </div>


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
