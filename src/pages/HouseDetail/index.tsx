import React, { Fragment } from 'react';
import { ActionSheet } from 'antd-mobile';
import { BsBoxArrowUpRight, BsChevronLeft } from 'react-icons/bs';
import styles from './index.module.less';

interface dataListType {
  url?: string;
  title: string;
  icon: JSX.Element;
}

const dataList: dataListType[] = [
  { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
  { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
  { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  { url: 'OpHiXAcYzmPQHcdlLFrc', title: '支付宝' },
].map((obj) => ({
  icon: (
    <img
      src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`}
      alt={obj.title}
      style={{ width: 36 }}
    />
  ),
  title: obj.title,
}));

const showShareActionSheetMulpitleLine = () => {
  const data = [[...dataList]];
  ActionSheet.showShareActionSheetWithOptions(
    {
      options: data,
      title: '分享到',
    },
    (...args) => {
      console.log('====================================');
      console.log(args);
      console.log('====================================');
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
  );
};

const HouseDtail: React.FC = () => {
  return (
    <Fragment>
      <div className={styles['header-bar--top']}>
        <a href="#">
          <BsChevronLeft />
        </a>
        <p>房源详情</p>
        <a href="#" onClick={() => showShareActionSheetMulpitleLine()}>
          <BsBoxArrowUpRight />
        </a>
      </div>

      <div className={styles['main-body--wrapper']}>4234</div>
    </Fragment>
  );
};

export default HouseDtail;
