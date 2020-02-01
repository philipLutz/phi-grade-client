import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App.js';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
