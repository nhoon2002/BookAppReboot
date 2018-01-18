import React, {Component} from 'react';
import CoverFlow from 'coverflow-react';

class Carousel extends Component {
   constructor(props) {
      super(props)

      this.state = {imagesArr: []};


   }



   render() {

      return (
        <div>

        {this.props.data
        ?
        <div className='row'>

          <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
            <CoverFlow
              imagesArr={this.props.data}
              direction="horizontal"
              width="100vw"
              height="400"
              itemRatio="32:48"
              background="rgba(0, 0, 0, 0)"
              labelsArr={this.props.labels}
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
