import {combineReducers} from 'redux';

import profile from './profile';
import associates from './associates';
import pathName from './pathName';
import notes from './notes';
import users from './users';
import quiz from './quiz';
import count from './count';

const rootReducer = combineReducers({
  profile,
  associates,
  pathName,
  notes,
  users,
  quiz,
  count
});

export default rootReducer;