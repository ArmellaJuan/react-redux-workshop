import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

store.subscribe(() => console.log('store', store.getState()));

store.dispatch({type: 'INCREMENT', payload: 10});
store.dispatch({type: 'DECREMENT', payload: 5});

export default store;
