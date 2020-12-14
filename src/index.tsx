import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import PageLoading from '@/components/PageLoading';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<PageLoading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
