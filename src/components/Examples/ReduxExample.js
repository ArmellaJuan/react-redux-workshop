import Redux from 'redux';

const reducer = (state = {value: 0}, action) => {
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, {value: state.value + action.payload});
  }
  if (action.type === 'DECREMENT') {
    return Object.assign({}, state, {value: state.value - action.payload});
  }

  return state;
};

let store = Redux.createStore(reducer);

store.subscribe(() => console.log('store', store.getState()));

store.dispatch({type: 'INCREMENT', payload: 10});
store.dispatch({type: 'DECREMENT', payload: 5});
