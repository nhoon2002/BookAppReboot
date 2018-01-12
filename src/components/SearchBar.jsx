import React, {Component} from 'react';
// import Coverflow from 'react-coverflow';

class SearchBar extends Component {
   constructor(props) {
      super(props)

      this.state = {qData: []};

      this.handleChange = this.handleChange.bind(this);
      this.updateData = this.updateData.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange() {
     var key = this.refs.keyword.value;
     this.updateData(['']) //Clear state.
     if (key.length >= 2) {
       //SEND API REQUEST
       console.log('Criteria met: keyword = %s', key);


      //  this.setState({qData: this.props.queryData})


     }
   }

   handleSubmit(e) {
     if (e.charCode == 13) {
       var key = this.refs.keyword.value;
       if (key.length >= 2) {
         this.props.fetchQuery(key);
       } else if (key.length < 2) {
         console.log('Must Enter at least 2 characters');
       }
    }

   }


   componentDidMount() {
     var dataArray = this.props.queryData;
     this.updateData(dataArray);
     console.log('component mounted with dataArray: ',dataArray);

   }
   componentWillReceiveProps(nextProps) {
       if((this.props.queryData) !== (nextProps.queryData)) // Check if it's a new user, you can also use some unique, like the ID
       {
              this.updateData(nextProps.queryData);
              console.log('qdata:',this.state.qData);
              console.log('queryData:', Array.isArray(this.props.queryData));
       }
   }
   updateData(data) {
     this.setState({qdata: data})
     this.forceUpdate(); //Force update;
   }




   render() {

     const photoURL = 'https://image.tmdb.org/t/p/w320/';



      return (

         <div>
            <div className='row'>
               <div className='col-md-2 col-lg-2 col-sm-1'></div>
               <div className='col-md-8 col-lg-8 col-sm-10 leftPanel'>
                  <p className="s"><input name="search" id="search" onChange={this.handleChange} onKeyPress={this.handleSubmit} type="search" ref="keyword"/></p>
                  {/* <button className='btn btn-primary' onClick={() => this.props.sampleAxiosToTmdb()}>Go</button> */}
               </div>


               <div className='col-md-2 col-lg-2 col-sm-1'></div>
            </div>
            <br/>





         </div>

      )
    }



}

export default SearchBar;
