import React, { Component } from 'react';
import {Link} from 'react-router';
// import regisCont from './registerCont.jsx';




class Home extends Component {
	render() {



        return (
        <div>

            <div className="jumbotron">
                <h1>Welcome to Movie App.</h1>
					 <button className='button'>
						 <Link to='/signin'>Log In</Link>
					 </button>
					 <button className='button'>
						 <Link to='/signup'>Sign Up</Link>
					 </button>
            </div>



        </div>

    );
  }

};


export default Home;
