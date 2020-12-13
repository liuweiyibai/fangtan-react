import React from 'react';
import { Grid } from 'antd-mobile';
import fangImgSrc from '@/assets/images/fang.png';
import styles from './HomeGrid.module.less';

const list = [...new Array(8)].map(() => ({
  icon: fangImgSrc,
  text: '租房',
}));

const HomeGrid: React.FC = () => {
  return (
    <section className={styles['home-caption']}>
      <Grid
        data={list}
        columnNum={4}
        itemStyle={{
          fontSize: '14px',
        }}
      />
    </section>
  );
};

export default HomeGrid;
