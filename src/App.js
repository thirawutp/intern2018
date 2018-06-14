import React, { Component } from 'react';
import logo from './logo.svg';
import { GoogleLogin } from 'react-google-login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloaddddd.
        </p>
        <GoogleLogin
          clientId="641800244467-7aldrh70n1h6mkol4duq2hkn77jcp46v.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={(success) => console.log(success)}
          onFailure={(err) => console.log(err)}
        />
      </div>
    );
  }
}

export default App;
