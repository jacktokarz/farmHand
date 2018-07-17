import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TextInput, TextDisplay} from './containers'

console.log("This is text input: ",TextInput);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Your new home</h1>
        </header>
        <TextDisplay />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextInput />
      </div>
    );
  }
}

export default App;
