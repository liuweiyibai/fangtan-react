import React, { Fragment } from 'react';
import { ActionSheet } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { BsBoxArrowUpRight, BsChevronLeft } from 'react-icons/bs';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';

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

const showShareActionSheet = () => {
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
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <Fragment>
      <HeaderLayout
        text="房源详情"
        leftIcon={
          <a href="#" onClick={handleBack}>
            <BsChevronLeft />
          </a>
        }
        rightIcon={
          <a href="#" onClick={showShareActionSheet}>
            <BsBoxArrowUpRight />
          </a>
        }
      />

      <BodyLayout>
        <section className={styles['house-detail--body']}></section>
      </BodyLayout>
    </Fragment>
  );
};

export default HouseDtail;
