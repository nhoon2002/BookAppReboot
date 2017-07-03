import React, { Component } from 'react';


function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Home';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class Main extends Component {

  render() {
    return (
      <div className="Main">
         <span className="pageName">{getNiceName(this.props.routes)}{' '}
            page
         </span>



        <div className="container Main-content">



          {React.cloneElement(this.props.children, this.props)}


        </div>


      </div>

    );

  }
}


export default Main;
