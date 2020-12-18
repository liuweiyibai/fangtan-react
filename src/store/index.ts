import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

/**
 * 参考地址
 * https://github.com/zalmoxisus/redux-devtools-extension#installation
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [thunk, createLogger()];

if (process.env.NODE_ENV === 'production') {
  middlewares = [thunk];
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
