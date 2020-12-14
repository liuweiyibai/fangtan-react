import { Result } from 'antd-mobile';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';

const NoFoundPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles['not-found-warpper']}>
      <Result
        imgUrl="https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"
        title="404"
        message="Sorry, the page you visited does not exist."
        buttonType="ghost"
        buttonText="Back Home"
        onButtonClick={() => history.push('/')}
      />
    </div>
  );
};

export default NoFoundPage;
