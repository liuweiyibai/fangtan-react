import React, { Fragment } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { List, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { BsPhone, BsUnlock } from 'react-icons/bs';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import { loginIn } from '@/store/user/slice';
import styles from './index.module.less';
import { RootState } from '@/store/reducers';

const UserLogin: React.FC<{}> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isPending = useSelector<RootState, boolean>(
    (state) => state.user.isPending,
  );

  const handleBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    dispatch(
      loginIn({
        username: '',
        password: '',
        checkout: false,
      }),
    );
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
            <Button
              disabled={isPending}
              loading={isPending}
              onClick={handleClick}
            >
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
