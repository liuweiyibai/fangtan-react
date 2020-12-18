import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import PageLoading from '@/components/PageLoading';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

/**
 * 全局样式文件
 */
import './styles/global.less';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<PageLoading />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
