import React, { Component } from 'react';
import {Link} from 'react-router';
// import regisCont from './registerCont.jsx';




class Signup extends Component {
	render() {



        return (
        <div>

            <div className="jumbotron home">
                <h1 className="homeBanner">Signup Page.</h1>
					 <button className='button'>
						 <Link to='/signin'>Already Have Account.</Link>
					 </button>
					 <button className='button'>
						 <Link to='/'>Back to Home.</Link>
					 </button>

            </div>



        </div>

    );
  }

};


export default Signup;
