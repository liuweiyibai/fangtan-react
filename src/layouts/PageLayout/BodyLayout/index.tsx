import React from 'react';
import styles from '../PageLayout.module.less';

interface MYFC<T> extends React.FC<T> {
  auth?: Boolean;
}

const PageBody: MYFC<{}> = ({ children }) => {
  return (
    <main className={styles['page-body--wrapper']}>
      <div className={styles['page-body--content']}>{children}</div>
    </main>
  );
};
PageBody.auth = true;

export default PageBody;
