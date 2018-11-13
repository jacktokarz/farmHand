import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import { Home, Lobby, Match, ChoiceModal } from './containers'

const App = () => (
  <main>
  	<BrowserRouter>
	    <Switch>
	      <Route exact path="/" component={Home} />
	      <Route exact path="/lobby" component={Lobby} />
	      <Route path="/match" component={Match} />
	    </Switch>
	</BrowserRouter>
  </main>
)

export default App;