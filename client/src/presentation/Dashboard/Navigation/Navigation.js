import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { GoogleLogout } from 'react-google-login';

const Navigation = (props) => {
  const forceMyOwnLogout = ((response) => {
    // cookie.remove('MyGoogleID', { path: '/' });
    // if (window.gapi) {
    //     const auth2 = window.gapi.auth2.getAuthInstance()
    //     if (auth2 != null) {
    //         auth2.signOut().then(
    //             auth2.disconnect().then(this.props.onLogoutSuccess)
    //         )
    //     }
    // }
    // this.forceUpdate();
    console.log('you logged out');
    localStorage.clear(); //clear localStorage
    window.location.pathname = "/"; // send user back to the homepage
  })

  return(
    <div className="nav">
      <div>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/classes">Classes</Link>
        <Link to="/dashboard/notes">Notes</Link>
        <Link to={"/dashboard/" + props.title}>{props.title[0].toUpperCase() + props.title.substring(1,props.title.length)}</Link>
      </div>
      <div>
      {/* <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={forceMyOwnLogout}
      ></GoogleLogout> */}
      <button 
        id="logout-button"
        onClick={forceMyOwnLogout}
      >Logout</button>
      </div>
    </div>
  )
}

export default Navigation;