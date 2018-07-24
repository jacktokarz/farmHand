import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Store from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { listenForMatches } from './utils';


const storeInstance= Store({});

listenForMatches(storeInstance);


ReactDOM.render(
	<Provider store={storeInstance}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
