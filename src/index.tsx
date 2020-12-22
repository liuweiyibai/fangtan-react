import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './store';
import PageLoading from '@/components/PageLoading';
import App from './components/App';

/**
 * 全局样式文件
 */
import './styles/global.less';

const { persistor, store } = createStore();

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<PageLoading />} persistor={persistor}>
          <Suspense fallback={<PageLoading />}>
            <App />
          </Suspense>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', render);
}
