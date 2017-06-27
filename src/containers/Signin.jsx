import React, { Component } from 'react';
import {Link} from 'react-router';
// import regisCont from './registerCont.jsx';




class Signin extends Component {
	render() {



        return (
        <div>

            <div className="jumbotron home">
                <h1 className="homeBanner">Signin Page.</h1>
					 <button className='button'>
						 <Link to='/'>Back to Home</Link>
					 </button>

            </div>



        </div>

    );
  }

};


export default Signin;
