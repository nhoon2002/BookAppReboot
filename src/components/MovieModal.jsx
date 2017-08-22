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


                  <div className='col-md-6 col-lg-6 modalPosterHolder'>
                    <img id='modalPoster' src={this.props.movieModalSrc} alt='' />
                  </div>
                  <div className='col-md-6 col-lg-6'>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleForm}>HandleForm</button>
                    <button className="btn btn-lg btn-warning btn-block" type="button" onClick={this.close}>Close</button>
                  </div>

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
