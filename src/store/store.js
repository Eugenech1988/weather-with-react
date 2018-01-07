import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from 'reducers/rootReducer';

const loggerMiddleware = createLogger();

const middlewares = [
  loggerMiddleware
];

const configureStore = () => {
  return {
    ...createStore(rootReducer,
      composeWithDevTools(applyMiddleware(...middlewares)))
  };
};

export default configureStore;
