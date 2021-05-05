import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
<h2>KPCHOST User</h2>         

<p style="white-space:pre-line;" id="token_status"></p>

<p>Id Token</p>

<p style="white-space:pre-line;" id="id_token"></p>

<p>Access Token</p>

<p style="white-space:pre-line;" id="access_token"></p>

<p>User Profile</p>

<p style="white-space:pre-line;" id="userInfo"></p>
          <a
            className="App-link"
            href="https://cdn.forms-content.sg-form.com/0981b8ad-92d7-11eb-8fdd-aa18125c3efc"
            
            rel="noopener noreferrer"
          >
            Learn The Bear Language
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
