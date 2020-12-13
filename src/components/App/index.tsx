import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import BasicLayout from '@/layouts/BasicLayout';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={BasicLayout} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// The following changes are being made to your tsconfig.json file:
//   - compilerOptions.jsx must be react-jsx (to support the new JSX transform in React 17)
//   - compilerOptions.paths must not be set (aliased imports are not supported)
