import React from 'react';
import loadable from '@loadable/component';
import PageLoading from '@/components/PageLoading';

export default (page: string) =>
  loadable(() => import(`@/pages/${page}`), {
    fallback: <PageLoading />,
  });
