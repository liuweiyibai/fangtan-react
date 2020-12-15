import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import AuthRoute from '../AuthRoute';

const Home = lazy(() => import('@/pages/Home'));
const Lease = lazy(() => import('@/pages/Lease'));
const HouseDetail = lazy(() => import('@/pages/HouseDetail'));
const UserLogin = lazy(() => import('@/pages/UserPage/Login'));
const UserRegister = lazy(() => import('@/pages/UserPage/Register'));

const demo = () => <div>ceshi </div>;

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/404" component={NotFound} />
        <AuthRoute
          path="/user/center"
          component={demo}
          authed={false}
          redirectTo="/user/login"
          exact
        />
        <Route path="/home" exact component={Home} />
        <Route path="/lease" exact component={Lease} />
        <Route path="/house/detail/:houseId?" exact component={HouseDetail} />
        <Route path="/user/login" exact component={UserLogin} />
        <Route path="/user/register" exact component={UserRegister} />
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// The following changes are being made to your tsconfig.json file:
//   - compilerOptions.jsx must be react-jsx (to support the new JSX transform in React 17)
//   - compilerOptions.paths must not be set (aliased imports are not supported)
