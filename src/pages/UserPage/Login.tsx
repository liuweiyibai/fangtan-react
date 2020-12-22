import React, { Fragment, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toast } from 'antd-mobile';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { BsPhone, BsUnlock } from 'react-icons/bs';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import { fetchUserLogin } from '@/store/system/thunks';

import styles from './index.module.less';

const UserLogin: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleBack = () => {
    history.goBack();
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const resp = await dispatch(
        fetchUserLogin({
          username: '',
          password: '',
        }),
      );
      console.log(resp);
      setLoading(false);
    } catch (error) {
      Toast.fail(error.message || '用户名或密码错误！');
      setLoading(false);
    }
  };

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
            <Button disabled={loading} loading={loading} onClick={handleClick}>
              登录
            </Button>
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
