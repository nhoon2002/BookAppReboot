import React, {Component} from 'react';


class SearchBar extends Component {
   constructor(props) {
      super(props)

      this.state = {};
   }

   render() {
      return (

         <div className='container libContainer'>
            <div className='row'>
               <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
               <div className='col-md-8 col-lg-8 col-sm-10 leftPanel'>
                  <p className="s"><input name="search" id="search" type="search"/></p>
                  <button className='btn btn-primary' onClick={() => this.props.sampleAxiosToTmdb()}>Go</button>
               </div>


               <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
            </div>
         </div>

      )
   }



}

export default SearchBar;
