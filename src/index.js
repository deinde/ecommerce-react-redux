import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools}from 'redux-devtools-extension';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import {browserHistory,Router,Route} from 'react-router';
import {syncHistoryWithStore}  from 'react-router-redux'
import './main.css';
import Layout from 'components/layout'
//import Test from 'components/test'
import Phones from 'components/phones'
								
const store = createStore(reducers,composeWithDevTools(
	applyMiddleware(thunk)
));

//const history = browserHistory;
const history = syncHistoryWithStore(browserHistory,store);

const root = document.querySelector('#root')

ReactDOM.render(<Provider store={store}>
					<Router history={history} >
						<Route component={Layout}>
							<Route path='/' component ={Phones}/>
				        </Route>
					</Router>
				</Provider>,root)