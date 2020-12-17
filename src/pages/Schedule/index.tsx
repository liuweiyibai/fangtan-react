import React, { Fragment } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import FooterLayout from '@/layouts/PageLayout/FooterLayout';
import PageFooter from '@/components/PageFooter';
import ListItem from './components/ListItem';

// import styles from '@/pages/UserPage/index.module.less';
import stylesSelf from './index.module.less';

const tabs2 = [
  { title: '进行中的约看', sub: '1' },
  { title: '已完成的约看', sub: '2' },
];

const list = [...new Array(6)].map((t) => ({
  image: '',
  address: '',
  date: '',
  name: '',
  status: 0,
}));

const Schedule: React.FC = () => {
  const handleBack = () => {
    return false;
  };

  const handleSearch = () => {
    return false;
  };

  return (
    <Fragment>
      <HeaderLayout
        text="看房日程"
        leftIcon={
          <a href="#" onClick={handleBack}>
            合肥 <BsChevronDown />
          </a>
        }
        rightIcon={
          <a href="#" onClick={handleSearch}>
            <BsSearch />
          </a>
        }
      />

      <BodyLayout className={stylesSelf['schedule-content--wrapper']}>
        <Tabs
          tabs={tabs2}
          initialPage={0}
          tabBarPosition="top"
          renderTab={(tab) => <span>{tab.title}</span>}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {list.map((t, i) => (
              <Fragment key={i}>
                <ListItem status={i} />
                <WhiteSpace />
              </Fragment>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {list.map((t, i) => (
              <Fragment key={i}>
                <ListItem />
                {<WhiteSpace />}
              </Fragment>
            ))}
          </div>
        </Tabs>
      </BodyLayout>
      <FooterLayout>
        <PageFooter />
      </FooterLayout>
    </Fragment>
  );
};

export default Schedule;
