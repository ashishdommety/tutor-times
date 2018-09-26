import React, {Component} from 'react';
import './ProfileInfo.css';

class ProfileInfo extends Component{
  render(){
    return(
      <div id="profileInfo">
        <img src={localStorage.photoLink} alt="profile" id="profileImage"/>
        <div className="profileDetails">
          <h2>John Doe</h2>
          <p>Goal</p>
          <p>Motto</p>
          <p>Bio</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;