import {combineReducers} from 'redux';

import profile from './profile';
import classes from './classes.js';
import associates from './associates';
import isTutor from './isTutor';

const rootReducer = combineReducers({
  profile,
  classes,
  associates,
  isTutor
});

export default rootReducer;