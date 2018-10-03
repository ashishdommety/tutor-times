import {combineReducers} from 'redux';

import profile from './profile';
import associates from './associates';
import pathName from './pathName';
import notes from './notes';
import users from './users';
import quiz from './quiz';

const rootReducer = combineReducers({
  profile,
  associates,
  pathName,
  notes,
  users,
  quiz
});

export default rootReducer;