import { configureStore, MiddlewareArray, Action } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk, { ThunkAction } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import history from '@/utils/history';
import rootReducer, { RootState } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

let middlewares = [thunk, routerMiddleware(history)];
if (!isProduction) {
  middlewares = [...[createLogger()], ...middlewares];
}

const persistConfig = {
  key: 'fangtan',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: new MiddlewareArray().concat(...middlewares),
});

/**
 * hmr 配置参考
 * https://redux-toolkit.js.org/tutorials/advanced-tutorial#store-setup-and-hmr
 */

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
