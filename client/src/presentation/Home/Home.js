import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';

const Home = (props) => {
  const responseGoogle = (response) => {
    let storage = window.localStorage;
    console.log(response);
    if(!storage.length){
      let name = response.profileObj.givenName;
      let photo = response.profileObj.imageUrl;
      let googleId = response.profileObj.googleId;
      localStorage.setItem("gId", googleId);
      localStorage.setItem("name", name);
      localStorage.setItem("photoLink", photo);
      window.location.pathname = "/dashboard";
    }else{
      window.location.pathname = "/dashboard";
    }

  }; 

  const pathName = window.location.origin;
  console.log(pathName);
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
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
      </div>
    );
}

export default Home;
