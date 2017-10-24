import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import syncHistoryWithStore from 'react-router-redux';



const store = createStore(reducers,composeWithDevTools(
	applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory,store);
document.write('Hello React/Redux!')