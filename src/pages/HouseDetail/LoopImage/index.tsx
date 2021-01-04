import React from 'react';
import { Carousel } from 'antd-mobile';
import styles from '../index.module.less';

const images = new Array(3).fill(1).map((t, i) => ({
  src: 'https://liuweiyibai.github.io/fangsao/upload/room.jpg',
  title: `华府骏苑${i}`,
  sutTitle: '蜀山区-望潜交口',
}));

const LoopImage: React.FC<{}> = () => {
  return (
    <Carousel>
      {images.map((t, i) => (
        <div className={styles['house-detail-carousel']} key={i}>
          <img src={t.src} alt={t.title} />
          <div>{t.title}</div>
        </div>
      ))}
    </Carousel>
  );
};

export default LoopImage;
