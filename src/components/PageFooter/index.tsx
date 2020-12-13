import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import styles from './index.module.less';

const PageFooter: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('life');
  return (
    <footer className={styles['page-footer--layout']}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
        tabBarPosition="top"
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            setSelectedTab('blueTab');
          }}
          data-seed="logId"
        />
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
          selected={selectedTab === 'redTab'}
          onPress={() => {
            setSelectedTab('redTab');
          }}
          data-seed="logId1"
        />

        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          selected={selectedTab === 'greenTab'}
          onPress={() => {
            setSelectedTab('greenTab');
          }}
        />

        <TabBar.Item
          icon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
          }}
          selectedIcon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          }}
          title="My"
          key="my"
          selected={selectedTab === 'yellowTab'}
          onPress={() => {
            setSelectedTab('yellowTab');
          }}
        />
      </TabBar>
    </footer>
  );
};

export default PageFooter;
