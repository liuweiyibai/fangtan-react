import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import BasicLayout from '@/layouts/BasicLayout';

const HouseDetail = lazy(() => import('@/pages/HouseDetail'));

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route path="/user/login" component={NotFound} />
        <Route path="/user/register" component={NotFound} />
        <Route path="/house/detail/:houseId?" component={HouseDetail} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// The following changes are being made to your tsconfig.json file:
//   - compilerOptions.jsx must be react-jsx (to support the new JSX transform in React 17)
//   - compilerOptions.paths must not be set (aliased imports are not supported)
