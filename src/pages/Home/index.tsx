import React, { Fragment, FC } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module.less';
import homeBgSrc from '@/assets/images/index-banner.jpg';
import HomeGrid from './components/HomeGrid';
import HomeListItem from './components/HomeListItem';
import HomeSearchBar from './components/HomeSearchBar';
import { useDocTitle } from '@/utils/customHooks';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import FooterLayout from '@/layouts/PageLayout/FooterLayout';
import PageFooter from '@/components/PageFooter';

const Home: FC = () => {
  useDocTitle('首页');
  const history = useHistory();
  return (
    <Fragment>
      <BodyLayout>
        <div className={styles['home-header']}>
          <div className={styles['home-header--bg']}>
            <img src={homeBgSrc} alt="轻松租房 乐享生活" />
          </div>

          <HomeSearchBar />

          <div className={styles['header-title']}>
            <p className={styles['header-num']}>
              房嫂已为<span>53789</span>用户成功租房！
            </p>
            <p className={styles['header-da']}>轻松租房 乐享生活</p>
          </div>
        </div>

        <HomeGrid />
        <section className={styles['home-recom']}>
          <div className={styles['home-recom--title']}>
            <p>热门房源推荐</p>
          </div>
          <div className={styles['home-recom--content']}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => (
              <HomeListItem
                key={t}
                onClick={() => history.push(`/house/detail/${t}`)}
              />
            ))}
          </div>
        </section>
      </BodyLayout>
      <FooterLayout>
        <PageFooter />
      </FooterLayout>
    </Fragment>
  );
};

export default Home;
