import React, {Component} from 'react';
import Coverflow from 'react-coverflow';

class Carousel extends Component {
   constructor(props) {
      super(props)

      this.state = {};


   }



   render() {
      return (
        <Coverflow width="1400" height="400"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={false}
          clickable={true}
          active={2}
          >


            {this.state.teams.slice(0, size).map((team, i) =>
              <div className='coverflowdiv' key={i}>
                <Link to={'/newproject/' + team._id}>
                <span><h1 className='coverflow_h1' data-mid={team._id}>{team.teamname}</h1></span>
                <div className="coverflowdiv2">
                  <h4>
                    {team.adminName}
                  </h4>
                  <span><img className='navbar-profilepic img-circle' src={team.adminAvatar ? team.adminAvatar : "http://www.liveanimalslist.com/birds/images/hen-white-and-black-color.jpg" } /></span>

                </div>
              </Link>
            </div>





          )}



        </Coverflow>


      )
   }



}

export default Carousel;
