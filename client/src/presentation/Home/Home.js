import React, {Component} from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';

class Home extends Component{
  
  responseGoogle = (response) => {
    // search for user in db.
    let google_id = response.profileObj.googleId;
    this.props.fetchUserAsync(google_id);
    // store login data in localStorage for immediate use
    localStorage.setItem("gId", google_id);
    localStorage.setItem("name", response.profileObj.givenName);
    localStorage.setItem("photoLink", response.profileObj.imageUrl);
    // if they don't exist, send to sign up. If they do, send to dashboard.
    !this.props.google_id ? window.location.pathname = "/sign-up" : window.location.pathname = "/dashboard"; 
  }; 
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tutor Time</h1>
        </header>
        <p className="App-intro">
          A place where tutors and students meet to learn from each other.
        </p>
        <GoogleLogin
            clientId={"155095156692-ej9fcu01heh431vrcqevdp918eantvoo.apps.googleusercontent.com"}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
        />
      </div>
    );
  }
}

export default Home;
