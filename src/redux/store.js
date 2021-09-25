/**
 * Dependencies
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

/**
  * Others
  */
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middlewareList = [sagaMiddleware];

/* Display logger only in dev mode */
if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

export default function configureStore() {
  const store = createStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(...middlewareList)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
