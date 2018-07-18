import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Store from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const storeInstance= Store({})


ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
