import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'

// Working with redux devTools
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
	rootReducer,
	composeEnhancers
)
// Provider component - we allow any component to dispatch or get access to redux store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
