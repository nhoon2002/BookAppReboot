import React, {Component} from 'react';
// import Coverflow from 'react-coverflow';

class SearchBar extends Component {
   constructor(props) {
      super(props)

      this.state = {qData: []};

      this.handleChange = this.handleChange.bind(this);
      this.updateData = this.updateData.bind(this);
   }

   handleChange() {
     var key = this.refs.keyword.value;
     this.updateData([''])
     if (key.length > 3) {
       //SEND API REQUEST
       console.log('Criteria met: keyword = %s', key);
       this.props.fetchQuery(key)

      //  this.setState({qData: this.props.queryData})


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
     this.forceUpdate();
   }




   render() {

     const photoURL = 'https://image.tmdb.org/t/p/w320/';



      return (

         <div>
            <div className='row'>
               <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
               <div className='col-md-8 col-lg-8 col-sm-10 leftPanel'>
                  <p className="s"><input name="search" id="search" onChange={this.handleChange} type="search" ref="keyword"/></p>
                  {/* <button className='btn btn-primary' onClick={() => this.props.sampleAxiosToTmdb()}>Go</button> */}
               </div>


               <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
            </div>
            <br/>
            <br/>

            {this.props.queryData.length > 0
            ?
            <div className='row'>
              {/* <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div> */}
              <div className='col-md-12 col-lg-12 col-sm-12 coverflow'>
                {this.props.queryData.map((data,i) =>
                  <div className='posterDiv' key={i}>
                    {data.poster_path
                      ?<img src={photoURL + data.poster_path} alt='cover' />
                      :<img src={'https://placehold.it/320x480?text='+data.title} alt='nullcover'/>
                    }
                  </div>
                )}
              </div>
              {/* <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div> */}
              </div>
            :
            <div className='row'>
              <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
              <div className='col-md-8 col-lg-8 col-sm-10 coverflow'>

              </div>
              <div className='col-md-2 col-lg-2 col-sm-1'>Offset</div>
            </div>
            }



         </div>

      )
    }



}

export default SearchBar;
