import React, {Component} from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';

class Home extends Component{
  
 responseGoogle = (response) => {
    localStorage.setItem("all", JSON.stringify(response.profileObj));
    let google_id = response.profileObj.googleId;
    // store login data in localStorage for immediate use
    localStorage.setItem("google_id", google_id);
    localStorage.setItem("name", response.profileObj.givenName);
    localStorage.setItem("photoLink", response.profileObj.imageUrl);
    localStorage.setItem("email", response.profileObj.email);
    // search for user in db.
    this.props.fetchUserAsync(google_id);
  }; 

  componentDidUpdate(){
    this.props.history.push(this.props.pathName);
  }
  
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
