import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { Link, useHistory } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import HeadrLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import styles from './index.module.less';

const ExtraButton: React.FC = () => {
  const intervalRef = useRef<any>(null);
  const [count, changeCount] = useState(0);
  // 组件卸载时清除计时器
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (count === 59) {
      intervalRef.current = setInterval(() => {
        changeCount((preCount) => preCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(intervalRef.current);
    }
  }, [count]);

  const handleClick = useCallback(() => {
    changeCount(59);
  }, []);

  return (
    <Button size="small" disabled={!!count} onClick={handleClick}>
      {count ? `${count} s` : '获取验证码'}
    </Button>
  );
};

const Register: React.FC<{}> = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <HeadrLayout
        text="登录"
        leftIcon={
          <a href="#" onClick={handleBack}>
            <BsChevronLeft />
          </a>
        }
      />
      <BodyLayout>
        <div className={styles['user-register--content']}>
          <List>
            <InputItem type="phone" labelNumber={4} placeholder="请输入手机号">
              手机号
            </InputItem>
            <InputItem
              type="number"
              labelNumber={4}
              placeholder="请输入验证码"
              extra={<ExtraButton />}
            >
              验证码
            </InputItem>
            <InputItem type="password" labelNumber={4} placeholder="请输入密码">
              密码
            </InputItem>
            <InputItem type="password" labelNumber={4} placeholder="请确认密码">
              确认密码
            </InputItem>
          </List>
          <WhiteSpace />
          <div className={styles['user-form--btn']}>
            <Button>注册</Button>
          </div>
          <WhiteSpace />
          <WhiteSpace />
          <div className={styles['user-form--bottom']}>
            <p>
              已有账号？
              <Link to="/user/login">立即登录</Link>
            </p>
          </div>
        </div>
      </BodyLayout>
    </Fragment>
  );
};

export default Register;
