import React, { FC, lazy, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PageFooter from '@/components/PageFooter';

const Home = lazy(() => import('@/pages/Home'));

const BasicLayout: FC = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
      <div className="main-footer">
        <PageFooter />
      </div>
    </Fragment>
  );
};

export default BasicLayout;
