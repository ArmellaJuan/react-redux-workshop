import {combineReducers} from 'redux';

import numbers from './numbers';
import users from './users';

export default combineReducers({numbers: numbers, users: users});
