import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*
	* BrowserRouter
	- should be used when you have a server that will handle dynamic requests
	* HashRouter
	- should be used for static websites
	"Usually it is preferable to use a <BrowserRouter>, 
*/

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
