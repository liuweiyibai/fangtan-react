import React from 'react';
import classnames from 'classnames';
import styles from '../PageLayout.module.less';

interface MYFC<P> extends React.FC<P> {
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

// FC 组件自带 defaultProps 属性
// PageBody.defaultProps = {
//   className: '',
//   // style: { background: 'red' },
// };

export default PageBody;
