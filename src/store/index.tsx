import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const developmentStage = process.env.NODE_ENV === 'development';
const store = developmentStage ?
  createStore(rootReducer, applyMiddleware(thunk, logger)) :
  createStore(rootReducer, applyMiddleware(thunk));

export default store;
