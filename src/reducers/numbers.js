const reducer = (state = {value: 0}, action) => {
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, {value: state.value + action.payload});
  }
  if (action.type === 'DECREMENT') {
    return Object.assign({}, state, {value: state.value - action.payload});
  }

  return state;
};

export default reducer;
