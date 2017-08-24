import connect from 'react-redux';
import React from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown, Image} from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor(props){
    super(props);


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
          <img className='img-circle headerAvatar' src={this.props.currentUser.photoURL} alt='' />


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
