import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { GoogleLogout } from 'react-google-login';

const Navigation = (props) => {
  const logout = (response) => {
    console.log(response);
    // window.location.pathname = "/";
  }
  return(
    <div className="nav">
      <img src="https://via.placeholder.com/200x200" alt="thing" id="profile_pic" />
      {props.isTutor ? 
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/students">Students</Link>
        <Link to="/dashboard/calendar">Calendar</Link>
      </div> :
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/notes/:id">Notes</Link>
        <Link to="/dashboard/schedule-class">Schedule</Link>
      </div>  
      }
      <Link to="/">Logout</Link>
      {/* <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={logout}
      /> */}
    </div>
  )
}

export default Navigation;