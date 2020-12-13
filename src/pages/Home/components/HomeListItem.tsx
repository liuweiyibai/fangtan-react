import React from 'react';
import { Icon } from 'antd-mobile';
import imgSrc from '@/assets/images/list-tu.jpg';
import styles from './HomeListItem.module.less';

const HomeListItem: React.FC = () => {
  return (
    <div className={styles['list-item']}>
      <div className={styles['left-tu']}>
        <img src={imgSrc} />
      </div>
      <div className={styles['right-des']}>
        <div className={styles.tit}>
          <p>华府骏苑</p>
          <span>
            2500<samp>元/月</samp>
          </span>
        </div>
        <p className={styles['recom-jianjie']}>三室一厅一卫 | 125m² | 普装</p>
        <div className={styles['recom-bottom']}>
          <span>
            <Icon type="check-circle" />
            随时住
          </span>
          <span>
            <Icon type="check-circle" />
            家电齐全
          </span>
        </div>
      </div>
    </div>
  );
};
export default HomeListItem;
