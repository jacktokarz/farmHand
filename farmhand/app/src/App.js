import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { Home, Lobby, Match } from './containers'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lobby" component={Lobby} />
      <Route path="/match" component={Match} />
    </Switch>
  </main>
)

export default App;