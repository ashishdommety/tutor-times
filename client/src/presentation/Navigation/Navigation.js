import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import { GoogleLogout } from 'react-google-login';

const Navigation = (props) => {
  const logout = (response) => {
    console.log(response);
    console.log('you logged out');
    //clear localStorage
    localStorage.clear();
    // send user back to the homepage
    window.location.pathname = "/";
  }

  return(
    <div className="nav">
      <img src={localStorage.length !== 0 ? localStorage.getItem("photoLink") : "https://via.placeholder.com/200x200" } alt="thing" id="profile_pic" />
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
      <div>
      <button 
        id="logout-button"
        onClick={logout}
      >Logout</button>
      </div>
    </div>
  )
}

export default Navigation;