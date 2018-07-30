import {ADD_USER} from '../actions';

const initialState = [
  {id: 1, username: 'Kayla', email: 'kayla@gmail.com'},
  {id: 2, username: 'Sam', email: 'sam@gmail.com'},
  {id: 3, username: 'Shannon', email: 'shannon@gmail.com'},
  {id: 4, username: 'Tile', email: 'tile@gmail.com'},
];

const reducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return state.concat(action.payload.user);
  }

  return state;
};

export default reducer;
