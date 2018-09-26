import React, {Component} from 'react';
import './ProfileInfo.css';

class ProfileInfo extends Component{
  render(){
    return(
      <div id="profileInfo">
        <img src="https://via.placeholder.com/100x100" alt="profile"/>
        <h2>John Doe</h2>
        <p>Goal</p>
        <p>Motto</p>
        <p>Bio</p>
      </div>
    );
  }
}

export default ProfileInfo;