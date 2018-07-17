import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { listenForMessage } from './utils';

import Store from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const storeInstance= Store({})

listenForMessage(storeInstance);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
