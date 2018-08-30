import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import login from './reducers';

const middleware = applyMiddleware(thunk, logger);

export default createStore(login, middleware);