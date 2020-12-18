import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'antd-mobile';
import { DataItem } from 'antd-mobile/lib/grid/PropsType';
import fangImgSrc from '@/assets/images/fang.png';
import styles from './HomeGrid.module.less';

const list: DataItem[] = [...new Array(8)].map(() => ({
  icon: fangImgSrc,
  text: '租房',
  path: '/entire',
}));

const HomeGrid: React.FC = () => {
  const history = useHistory();
  return (
    <section className={styles['home-caption']}>
      <Grid
        data={list}
        columnNum={4}
        itemStyle={{
          fontSize: '14px',
        }}
        onClick={(el?: DataItem, _index?: number) => {
          if (el?.path) {
            history.push(el.path);
          }
        }}
      />
    </section>
  );
};

export default HomeGrid;
