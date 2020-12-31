import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from '@/utils/history';
import rootReducer, { RootState } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * 参考地址
 * https://github.com/zalmoxisus/redux-devtools-extension#installation
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
