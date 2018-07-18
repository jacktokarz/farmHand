import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './containers'

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <div className="row justify-content-around" id="FHBox">
          <div className="col-4">
            <img src="../../images/cardBack.png" alt="Farm Hand Card Back" />
            <div id="FHText">
              <div id="FHTitle">Farm Hand</div>
              <button onClick="playFH()" className="btn">Play</button>
              <button onClick="openFHRules()" className="btn">Rules</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
