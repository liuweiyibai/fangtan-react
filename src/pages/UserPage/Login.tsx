import React, { Fragment, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory, Link } from 'react-router-dom';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { BsPhone, BsUnlock } from 'react-icons/bs';
import HeadrLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import styles from './index.module.less';
import { userLogin } from '@/api/user';

const UserLogin: React.FC<{}> = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    async function ss() {
      const resp: Ajax.AjaxResponse = await userLogin({
        name: '',
        password: '22',
      });
      console.log(resp);
    }
    return () => {
      // clean
    };
  }, []);

  return (
    <Fragment>
      <HeadrLayout
        text="登录"
        leftIcon={
          <a href="#" onClick={() => handleBack()}>
            <BsChevronLeft />
          </a>
        }
      />
      <BodyLayout>
        <div className={styles['user-login--content']}>
          <List>
            <InputItem labelNumber={1} placeholder="请输入手机号" editable>
              <BsPhone />
            </InputItem>
            <InputItem labelNumber={1} type="password" placeholder="请输入密码">
              <BsUnlock />
            </InputItem>
          </List>
          <WhiteSpace />
          <div className={styles['user-form--btn']}>
            <Button>登录</Button>
          </div>
          <WhiteSpace />
          <WhiteSpace />
          <div className={styles['user-form--bottom']}>
            <p>
              还不是会员？
              <Link to="/user/register">立即注册</Link>
            </p>
            <Link to="/user/reset">忘记密码？</Link>
          </div>
        </div>
      </BodyLayout>
    </Fragment>
  );
};

export default UserLogin;
