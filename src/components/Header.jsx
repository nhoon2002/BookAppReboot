import React from 'react';
import connect from 'react-redux';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor(props){
    super(props);


  }



  render() {

  return(
    <div>
          <nav className="navbar navbar-default" id='headernav'>
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                  <img src='assets/img/logo-icon.png' className="Header-logo" alt="logo" />

              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/">Profile</Link></li>
                  <li><Link to="/">Projects</Link></li>




                </ul>

                <ul className="nav navbar-nav navbar-right">

                    <li className="notifications-bar">
                      <button className="btn btn-primary" type="button">Notifications
                        <span className="badge">4</span>
                      </button>
                    </li>
                    <li className="navbarPicture">

                      <img className='navbar-profilepic img-circle' src="http://placehold.it/50x50" alt='profilepic'/>

                    </li>
                    <li className="navbarLogout">Logout</li>


                </ul>
              </div>
            </div>
          </nav>
       </div>
       )
  }
}


export default Header;
