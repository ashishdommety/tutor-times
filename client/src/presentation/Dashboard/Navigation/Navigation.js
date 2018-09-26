import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// import { GoogleLogout } from 'react-google-login'; // test GoogleLogout on Heroku

const Navigation = (props) => {
  const logout = (response) => {
    console.log(response);
    console.log('you logged out');
    localStorage.clear(); //clear localStorage
    window.location.pathname = "/"; // send user back to the homepage
  }

  return(
    <div className="nav">
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/classes">Classes</Link>
        <Link to="/dashboard/notes">Notes</Link>
        <Link to={"/dashboard/" + props.title}>{props.title[0].toUpperCase() + props.title.substring(1,props.title.length)}</Link>
      </div>
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