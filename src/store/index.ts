import { configureStore, MiddlewareArray, Action } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ThunkAction } from 'redux-thunk';
import { rootReducer, RootState } from './reducer';

let middlewares = [thunk, createLogger()];

if (process.env.NODE_ENV === 'production') {
  middlewares = [thunk];
}

const persistConfig = {
  key: 'root',
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
  module.hot.accept('./reducer.ts', () => {
    const newRootReducer = require('./reducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
