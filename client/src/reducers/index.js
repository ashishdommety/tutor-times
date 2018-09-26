import {combineReducers} from 'redux';

import profile from './profile';
import classes from './classes.js';
import associates from './associates';
import pathName from './pathName';
import notes from './notes';

const rootReducer = combineReducers({
  profile,
  classes,
  associates,
  pathName,
  notes
});

export default rootReducer;