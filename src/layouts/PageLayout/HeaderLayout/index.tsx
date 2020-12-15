import React, { Fragment } from 'react';
import styles from '../PageLayout.module.less';

interface HeaderLayoutProps {
  children?: React.ReactNode;
  text?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  children,
  leftIcon,
  rightIcon,
  text,
}) => (
  <Fragment>
    {children ? (
      children
    ) : (
      <div className={styles['page-header--wrapper']}>
        {leftIcon ?? leftIcon}
        <p>{text}</p>
        {rightIcon ?? rightIcon}
      </div>
    )}
  </Fragment>
);

export default HeaderLayout;
