import React, { FC, Fragment } from 'react';
import { Route } from 'react-router-dom';

import lazy from '@/utils/lazy';
import PageFooter from '@/components/PageFooter';

const Home = lazy('Home');

const BasicLayout: FC = () => {
  return (
    <Fragment>
      <Route path="/home" exact component={Home} />
      <PageFooter />
    </Fragment>
  );
};

export default BasicLayout;
