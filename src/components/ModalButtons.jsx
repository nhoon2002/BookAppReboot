import React, {Component} from 'react';



class ModalButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleForm = this.handleForm.bind(this);
    this.close = this.close.bind(this);


  }


  handleForm(e){
    // this.close();
    // this.setState({enabled:false})
    var uid = this.props.currentUser.uid;
    var movieID = this.props.movieModalDetails.id;
    var details = this.props.movieModalDetails;
    // this.setState({enabled: false})
    this.props.swapButtons(false);
    this.props.addMovieToLibrary(uid,movieID,details);
  }
  close() {
    // this.setState({'show': false})
    this.props.closeMovieModal()
    //pass in this prop from the parent which comes from store.
  }

  render() {


    return (

      <div className='row'>

      {this.props.buttonEnabled ?
        <div className='modalButtonsHolder'>
          <button className="btn btn-lg btn-primary btn-modal" type="button">Add to Wish List</button>
          {/* <button className="btn btn-lg btn-success btn-modal" type="button">Button2</button> */}
          <button className="btn btn-lg btn-danger btn-modal" type="button" onClick={this.handleForm}>Add to Library</button>
          <button className="btn btn-lg btn-warning btn-modal" type="button" onClick={this.close}>Close</button>
        </div>
        :

        <div className='modalButtonsHolder'>
            <button className="btn btn-lg btn-primary btn-modal" type="button">&#9734;&#9734;&#9734;&#9734;&#9734;</button>
            <button className="btn btn-lg btn-success btn-modal" type="button">Add to Favorites</button>
            <button className="btn btn-lg btn-danger btn-modal" disabled='true' type="button" onClick={() => this.props.showNotification('Already in library!', 'danger')}>Already in Library</button>
            <button className="btn btn-lg btn-warning btn-modal" type="button" onClick={this.close}>Close</button>
        </div>
      }

      </div>

    )
  }
}




export default ModalButtons;
