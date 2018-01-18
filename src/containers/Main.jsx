import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Notification from '../components/Notification.jsx';


// function getNiceName(routes) {
// 	let path = (routes[routes.length - 1] || {}).path || 'Home';
// 	return path.replace('/', '')
// 			.toUpperCase() || 'Unknown Page';
// }

class Main extends Component {

  render() {
    return (

      <div className="Main">
			<div className='headerHolder'>
            <Header {...this.props} />
         </div>
         <div className='notificationHolder'>
            <Notification {...this.props} />
         </div>








          {React.cloneElement(this.props.children, this.props)}





      </div>

    );

  }
}


export default Main;
