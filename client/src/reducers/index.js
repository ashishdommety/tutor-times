import {combineReducers} from 'redux';

import profile from './profile';
import associates from './associates';
import pathName from './pathName';
import notes from './notes';
import users from './users';

const rootReducer = combineReducers({
  profile,
  associates,
  pathName,
  notes,
  users
});

export default rootReducer;