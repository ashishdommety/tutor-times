import React, {Component} from 'react';
import './ProfileInfo.css';

class ProfileInfo extends Component{
  render(){
    return(
      <div id="profileInfo">
        <img src={localStorage.photoLink} alt="profile" id="profileImage"/>
        <div id="profileDetails">
          <h3>Hi, {this.props.profile.name}!</h3>
          {/* <hr/> */}
          <h4>Here's a reminder of your goal:</h4>
          <p>{this.props.profile.goal}</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;