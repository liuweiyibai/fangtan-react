import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './index.module.less';
import {
  BsHouseDoor,
  BsPersonDash,
  BsCalendar,
  BsPersonBoundingBox,
} from 'react-icons/bs';

interface ListItem {
  text: string;
  icon: JSX.Element;
  key: string;
}

const lists: ListItem[] = [
  {
    text: '首页',
    icon: <BsHouseDoor />,
    key: '/home',
  },
  {
    text: '我要出租',
    icon: <BsPersonDash />,
    key: '/lease',
  },
  {
    text: '看房日程',
    icon: <BsCalendar />,
    key: 'day',
  },
  {
    text: '个人中心',
    icon: <BsPersonBoundingBox />,
    key: '/user/center',
  },
];

const PageFooter: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<string>('home');

  useEffect(() => {
    const { pathname } = location;
    const item = lists.find((t) => pathname.indexOf(t.key) > -1);
    if (item) {
      setSelectedTab(item.key);
    }
    return () => {};
  }, [location]);

  return (
    <footer className={styles['page-footer--layout']}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#f58611"
        barTintColor="#fff"
        hidden={false}
        tabBarPosition="top"
      >
        {lists.map((item) => (
          <TabBar.Item
            title={item.text}
            key={item.text}
            icon={item.icon}
            selectedIcon={item.icon}
            selected={selectedTab === item.key}
            onPress={() => {
              setSelectedTab(item.key);
              history.push(item.key);
            }}
          />
        ))}
      </TabBar>
    </footer>
  );
};

export default PageFooter;
