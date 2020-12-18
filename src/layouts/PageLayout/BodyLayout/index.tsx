import React from 'react';
import classnames from 'classnames';
import styles from '../PageLayout.module.less';

interface MYFC<T> extends React.FC<T> {
  auth?: Boolean;
}

interface IPageLayouProps {
  style?: React.CSSProperties;
  className?: string;
}

const PageBody: MYFC<IPageLayouProps> = ({ children, className, style }) => {
  return (
    <main className={styles['page-body--wrapper']} style={style}>
      <div className={classnames(styles['page-body--content'], className)}>
        {children}
      </div>
    </main>
  );
};

PageBody.auth = true;

PageBody.defaultProps = {
  className: '',
};

export default PageBody;
