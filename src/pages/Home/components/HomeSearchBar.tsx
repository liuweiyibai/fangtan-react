import React from 'react';
import { BsSearch, BsChevronDown } from 'react-icons/bs';

import styles from './HomeSearchBar.module.less';

const HomeSearchBar: React.FC = () => {
  return (
    <header className={styles['header-nav--bar']}>
      <a className={styles.btn} href="#">
        <p>
          合肥&nbsp;
          <BsChevronDown />
        </p>
      </a>
      <div className={styles['top-search--box']}>
        <BsSearch />
        <div className={styles['sch-txt']}>请输入您要搜索的内容</div>
      </div>
    </header>
  );
};

export default HomeSearchBar;
