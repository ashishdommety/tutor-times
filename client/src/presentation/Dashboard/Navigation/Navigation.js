import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { GoogleLogout } from 'react-google-login';

const Navigation = (props) => {
  const forceMyOwnLogout = ((response) => {
    console.log('you logged out');
    localStorage.clear(); //clear localStorage
    window.location.pathname = "/"; // send user back to the homepage
  })

  return(
    <div className="nav">
      <div>
        <Link to="/dashboard" className="link"><FontAwesomeIcon icon="home"/> Home</Link>
        {/* <Link to="/dashboard/notes">Notes</Link>
        <Link to={"/dashboard/" + props.title}>{props.title[0].toUpperCase() + props.title.substring(1,props.title.length)}</Link> */}
        <Link to={"/dashboard/quiz"} className="link"><FontAwesomeIcon icon="pencil-alt" /> Quiz</Link>
        <Link to={"/"} id="logout-button" onClick={forceMyOwnLogout} className="link"><FontAwesomeIcon icon="sign-out-alt" /> Logout</Link>
      </div>
      {/* <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={forceMyOwnLogout}
      ></GoogleLogout> */}
      
    </div>
  )
}

export default Navigation;