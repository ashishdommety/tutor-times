import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return(
    <div className="nav">
      <img src={props.picture} alt="thing" id="profile_pic" />
      {props.isTutor ? 
      <div>
        <Link to="/students">My Students</Link>
        <Link to="/calendar">Calendar</Link>
      </div> :
      <div>
        <Link to="/notes/:id">My Students</Link>
        <Link to="/schedule-class">Calendar</Link>
      </div>  
      }
      
    </div>
  )
}

export default Navigation;