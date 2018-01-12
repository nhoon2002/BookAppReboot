import React, { Component } from 'react';
// import axios from 'axios';
import fire from '../fire.js'


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
    fire.database().ref(`users/${this.props.currentUser.uid}/movies`).push({movieID: this.props.movieModalDetails.id, details:this.props.movieModalDetails});

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


                  <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12 modalPosterHolder'>
                    {this.props.movieModalDetails.poster_path
                      ?<img id='modalPoster' src={this.props.movieModalSrc} alt='' />
                      :<img id='modalPoster' src={`https://placehold.it/720x960?text=${this.props.movieModalDetails.title}`} alt='' />
                    }
                  </div>

                  <div className='col-md-6 col-lg-6 col-sm-6 col-xs-12 modalDetailsHolder'>
                    <div className='modalBackdropHolder'>
                      {this.props.movieModalDetails.backdrop_path
                        ?<img id='modalBackdrop' src={`https://image.tmdb.org/t/p/w1280${this.props.movieModalDetails.backdrop_path}`} alt='' />
                        :<img id='modalBackdrop' src={`https://placehold.it/720x960?text=${this.props.movieModalDetails.title}`} alt='' />
                      }
                    </div>

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
              <div className='row'>

                <div className='modalButtonsHolder'>
                  <button className="btn btn-lg btn-primary btn-modal" type="button">Button1</button>
                  <button className="btn btn-lg btn-success btn-modal" type="button">Button2</button>
                  <button className="btn btn-lg btn-danger btn-modal" type="button" onClick={this.handleForm}>Add to Library</button>
                  <button className="btn btn-lg btn-warning btn-modal" type="button" onClick={this.close}>Close</button>
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
