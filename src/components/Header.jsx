import connect from 'react-redux';
import React from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Image} from 'react-bootstrap';
import { Link } from 'react-router';
import * as firebase from 'firebase';

class Header extends React.Component {

  constructor(props){
    super(props);

    this.state = {photoURL: 'https://placehold.it/100x100'};
  }
  componentDidMount() {
     // When an authentication state has been changed...
     firebase.auth().onAuthStateChanged(firebaseUser => {


        this.props.checkSession(firebaseUser);
        // this.setState({[photoURL: firebaseUser]})

        if(firebaseUser) { //if user is logged in...
           this.setState({photoURL: firebaseUser.providerData[0].photoURL || 'http://www.kiet.edu/images/default.jpg'});
           console.log(firebaseUser);

           console.log('Current user: %s', firebase.auth().currentUser.uid);
           console.log("auth status changed: logged in as: " + firebaseUser.email);

        } else {
           console.log('auth status changed: not logged in');

        }

     });
 }


  render() {
    const navbarLoggedin = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">MovieApp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>



        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onClick={() => this.props.router.push('search')}>Search</NavItem>
            <NavItem eventKey={2} onClick={() => this.props.router.push('library')}>Library</NavItem>
          </Nav>


          <Nav pullRight>

            <NavItem eventKey={1} href="#">Profile</NavItem>




            <NavDropdown eventKey={2} title="Settings" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Action</MenuItem>
              <MenuItem eventKey={2.2}>Another action</MenuItem>
              <MenuItem eventKey={2.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.4} onClick={() => this.props.signOut()}>Sign Out</MenuItem>
            </NavDropdown>
          </Nav>
          <img className='img-circle headerAvatar' src={this.state.photoURL} alt='' />


        </Navbar.Collapse>





      </Navbar>
    )
    const navbarDefault = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">MovieApp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav>
            <NavItem eventKey={1} href="#">Profile</NavItem>
            <NavItem eventKey={2} href="#">Library</NavItem>
          </Nav> */}
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Login</NavItem>
            <NavItem eventKey={2} href="#">Signup</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
    return(
      <div id='headernav'>
        {this.props.loginStatus ? navbarLoggedin : navbarDefault}
      </div>
    )
  }
}


export default Header;
