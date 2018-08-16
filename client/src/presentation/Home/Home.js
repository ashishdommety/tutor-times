import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';
import runtimeEnv from '@mars/heroku-js-runtime-env';

const responseGoogle = (response) => console.log(response); // once response comes in dispatch an action that changes the state with some of the users details.

const env = runtimeEnv();
// console.log(env);

const Home = (props) => {
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
            uxMode='redirect'
            redirectUri={window.location.origin + "/dashboard"}
        />
      </div>
    );
}

export default Home;
