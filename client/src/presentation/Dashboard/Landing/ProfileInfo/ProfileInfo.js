import React, {Component} from 'react';
import './ProfileInfo.css';

class ProfileInfo extends Component{
  render(){
    return(
      <div id="profileInfo">
        <img src={localStorage.photoLink} alt="profile" id="profileImage"/>
        <div className="profileDetails">
          <h3>Hi, {this.props.profile.name}!</h3>
          <p><strong>Goal:</strong>{this.props.profile.goal}</p>
          <p><strong>Motto:</strong>{this.props.profile.motto}</p>
          <p><strong>Bio:</strong>{this.props.profile.bio}</p>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;