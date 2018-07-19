import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { Home, Lobby } from './components'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lobby" component={Lobby} />
    </Switch>
  </main>
)

export default App;