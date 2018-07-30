const reducer = (state = {users: []}, action) => {
  if (action.type === 'ADD_USER') {
    return Object.assign({}, state, {users: state.users.concat(action.payload.user)});
  }

  return state;
};

export default reducer;
