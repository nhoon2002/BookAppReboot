import { applyMiddleware, createStore, compose } from "redux";

//Connect react router with redux
import { syncHistoryWithStore } from "react-router-redux";

import { browserHistory } from "react-router";

import logger from "redux-logger";
import thunk from "redux-thunk";


import promise from "redux-promise-middleware";

import rootReducer from './reducers/index.js';
// axsios

//If making an initial state and passing as a preloadedState to createStore, need to make a reducer
//for each property in the intial state. The reason being the reducer has access to the state. So
//This is like setting the initial state for thee reducers here instead of doing it directly in the
//reducer function itself.

// const initialState = {
// 	allData: 123,
// 	sesssion
// }

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
