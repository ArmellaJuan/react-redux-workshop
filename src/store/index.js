import {createStore} from 'redux';

import reducers from '../reducers';

const store = createStore(reducers);

store.subscribe(() => console.log('store', store.getState()));

store.dispatch({type: 'INCREMENT', payload: 10});
store.dispatch({type: 'DECREMENT', payload: 5});

export default store;
