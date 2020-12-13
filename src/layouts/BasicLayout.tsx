import React, { FC, Fragment } from 'react';
import PageFooter from '@/components/PageFooter';
import { Route } from 'react-router-dom';
import Home from '@/pages/Home';

const BasicLayout: FC = () => {
  return (
    <Fragment>
      <Route path="/home" exact component={Home} />
      <PageFooter />
    </Fragment>
  );
};

export default BasicLayout;
