import React, { Fragment, useState } from 'react';
import { Tabs, WhiteSpace, Menu, Popover } from 'antd-mobile';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import HomeListItem from '@/pages/Home/components/HomeListItem';

import { BsChevronLeft, BsChevronDown } from 'react-icons/bs';

import styles from './index.module.less';
// const TabBar = Tabs.DefaultTabBar
const Item = Popover.Item;

const tabs = [
  { title: '区域', key: 't1' },
  { title: '租金', key: 't2' },
  { title: '排序', key: 't3' },
];

const data = [
  {
    value: '1',
    label: 'Food',
  },
  {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
  },
];

const myImg = (src: string) => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className="am-icon am-icon-xs"
    alt=""
  />
);

const Entire: React.FC = () => {
  const handleBack = () => {};
  const handleOnChange = () => {};
  const handleTabChange = (e: any) => {
    console.log(e);
  };

  const [visible, setVisible] = useState(false);
  const onSelect = () => {};

  return (
    <Fragment>
      <HeaderLayout
        text="登录"
        leftIcon={
          <a href="#" onClick={() => handleBack()}>
            <BsChevronLeft />
          </a>
        }
      />
      <div className={styles['entire-top--nav']}>
        <Tabs
          animated={false}
          tabs={tabs}
          initialPage={'t2'}
          noRenderContent={true}
          onChange={handleTabChange}
          renderTab={(tabData) => {
            const { title } = tabData;
            return (
              <span>
                {title}
                <BsChevronDown
                  style={{
                    marginLeft: '3px',
                    verticalAlign: '-2.25px',
                  }}
                />
              </span>
            );
          }}
        />
      </div>
      <WhiteSpace />

      <BodyLayout
        className="list-has-padding"
        style={{
          background: '#fff',
        }}
      >
        {[...new Array(10)].map((t, i) => {
          return (
            <HomeListItem
              key={i}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                alert(1);
              }}
            />
          );
        })}
      </BodyLayout>
    </Fragment>
  );
};

export default Entire;
