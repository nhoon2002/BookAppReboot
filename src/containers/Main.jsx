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
			<Header {...this.props} />




        <div className="container Main-content">



          {React.cloneElement(this.props.children, this.props)}


        </div>


      </div>

    );

  }
}


export default Main;
