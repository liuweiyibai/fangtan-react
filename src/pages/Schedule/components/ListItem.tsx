import React from 'react';
import classnames from 'classnames';
import { BsGeoAlt, BsClock } from 'react-icons/bs';
import HomeListItem from '@/pages/Home/components/HomeListItem';
import styles from '../index.module.less';

interface IListItemProps {
  status?: number;
}

const ListItem: React.FC<IListItemProps> = ({ status }) => {
  const classes =
    status && status % 2 === 1
      ? styles.status
      : classnames(styles.status, styles['status-green']);

  return (
    <div className={styles['schedule-listitem--wrapper']}>
      <div className={styles['topsche-top']}>
        <div>
          <p className={styles.add}>
            <BsGeoAlt />
            合肥·写字楼
          </p>
          <p className={styles.time}>
            <BsClock />
            2020-12-24
          </p>
        </div>
        <p className={classes}>正在确认</p>
      </div>
      <div className={styles['topsche-bottom'] + ' list-has-padding'}>
        <HomeListItem onClick={() => alert(1)} />
      </div>
    </div>
  );
};

ListItem.defaultProps = {
  status: 1,
};

export default ListItem;
