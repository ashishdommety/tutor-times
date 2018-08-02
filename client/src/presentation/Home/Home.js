import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

const Home = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tutor Time</h1>
        </header>
        <p className="App-intro">
          A place for where tutors and students meet. For real. For real, for real. Like, seriously.
        </p>
        <p>{props.status}</p>
        <button
          onClick={props.instigateLogin}>Login with Google</button>
      </div>
    );
}

export default Home;
