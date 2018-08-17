import React from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';
// import runtimeEnv from '@mars/heroku-js-runtime-env';

// const env = runtimeEnv();

// uxMode='redirect'
// redirectUri="http://localhost:3000/dashboard"

const Home = (props) => {
  const responseGoogle = (response) => {
    console.log(response.profileObj.givenName);
    console.log(response.profileObj.imageUrl);
    let name = response.profileObj.givenName;
    let photo = response.profileObj.imageUrl;
    props.fetchGoogleData(name, photo);
  }; 
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
            clientId={"155095156692-9mti1snraf70l1fnqel9mfa5bfpukp99.apps.googleusercontent.com"}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            uxMode="redirect"
            redirectUri="http://localhost:3000/dashboard"
        />
      </div>
    );
}

export default Home;
