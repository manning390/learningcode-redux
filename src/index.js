import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer.js';
import userReducer from './reducers/userReducer.js';

const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allStoreEnhancers = composeEnhancers(
	applyMiddleware(thunk)
);

const store = createStore(
	allReducers,
	{
		products: [{ name: 'iPhone' }],
		user: 'Michael'
	},
	allStoreEnhancers
);

console.log(store.getState());

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever"/></Provider>, document.getElementById('root'));
registerServiceWorker();
