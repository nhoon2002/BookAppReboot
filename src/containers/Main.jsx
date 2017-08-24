import React, { Component } from 'react';
import Header from '../components/Header.jsx';


// function getNiceName(routes) {
// 	let path = (routes[routes.length - 1] || {}).path || 'Home';
// 	return path.replace('/', '')
// 			.toUpperCase() || 'Unknown Page';
// }

class Main extends Component {

  render() {
    return (

      <div className="Main">
			<Header
        router={this.props.router}
        currentUser={this.props.currentUser}
        signOut={this.props.signOut}
        loginStatus={this.props.loginStatus}
       />








          {React.cloneElement(this.props.children, this.props)}





      </div>

    );

  }
}


export default Main;
