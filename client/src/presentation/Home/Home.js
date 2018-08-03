import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => console.log(response);

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
        <p>{props.status}</p>
        {/* <button
          onClick={props.instigateLogin}>Login with Google</button> */}
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
             onFailure={responseGoogle}
        />
      </div>
    );
}

export default Home;
