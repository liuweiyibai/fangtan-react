import React, { Fragment, useState, useRef } from 'react';
import {
  WhiteSpace,
  NoticeBar,
  List,
  InputItem,
  DatePicker,
  Picker,
  Button,
} from 'antd-mobile';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import HeaderLayout from '@/layouts/PageLayout/HeaderLayout';
import BodyLayout from '@/layouts/PageLayout/BodyLayout';
import FooterLayout from '@/layouts/PageLayout/FooterLayout';
import PageFooter from '@/components/PageFooter';
import MyRadio from '@/components/MyRadio';
import styles from '@/pages/UserPage/index.module.less';
import styles2 from './index.module.less';

interface item {
  label: string;
  value: number;
}

const lists: item[] = [
  {
    label: '整租',
    value: 1,
  },
  {
    label: '合租',
    value: 2,
  },
  {
    label: '商场、写字楼',
    value: 3,
  },
];

interface IChildRadioRef {
  checked?: boolean;
  // !divRef: HTMLSpanElement;
  // !current: ChildType;
}

const Lease: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [visible, setVisible] = useState<boolean>(false);
  const [pickerValue, setPickerValue] = useState<string | any>('');

  const radioRef = useRef<IChildRadioRef>({
    checked: false,
  });

  const handleBack = () => {};
  const handleSearch = () => {};

  /**
   * 是否提交
   * 获取checkbox选中状态
   */
  const handleConfirm = () => {
    const { checked } = radioRef.current;
    console.log(checked);
  };

  return (
    <Fragment>
      <HeaderLayout
        text="我要出租"
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

      <BodyLayout>
        <WhiteSpace />
        <NoticeBar>请填认证写您的房源信息，审核通过后会发布上架！</NoticeBar>
        <WhiteSpace />
        <div className={styles['user-login--content']}>
          <List>
            <InputItem labelNumber={4} placeholder="我们如何称呼您">
              您的姓名
            </InputItem>
            <InputItem
              type="phone"
              labelNumber={4}
              placeholder="我们会及时与您联系"
            >
              手机号
            </InputItem>
            <InputItem labelNumber={4} placeholder="请输入小区名称">
              小区名称
            </InputItem>
            <InputItem type="money" labelNumber={4} placeholder="例如5000">
              意向租金
            </InputItem>
            <DatePicker value={date} onChange={(date) => setDate(date)}>
              <List.Item arrow="horizontal">起租日期</List.Item>
            </DatePicker>

            <Picker
              cols={1}
              visible={visible}
              data={lists}
              onChange={(v) => setPickerValue(v)}
              onOk={() => setVisible(false)}
              onDismiss={() => setVisible(false)}
            >
              <List.Item arrow="horizontal" onClick={() => setVisible(true)}>
                租房类型
              </List.Item>
            </Picker>

            <Picker
              cols={1}
              visible={visible}
              data={lists}
              onChange={(v) => setPickerValue(v)}
              onOk={() => setVisible(false)}
              onDismiss={() => setVisible(false)}
            >
              <List.Item arrow="horizontal" onClick={() => setVisible(true)}>
                户型
              </List.Item>
            </Picker>
          </List>
          <p className={styles2['lease-bottom--title']}>
            <MyRadio ref={radioRef} />
            我已阅读阅读并同意 <Link to="/">《房嫂租房出租委托协议》</Link>
          </p>
          <div className={styles['user-form--btn']}>
            <Button onClick={handleConfirm}>提交委托</Button>
          </div>
          <WhiteSpace />
        </div>
      </BodyLayout>

      <FooterLayout>
        <PageFooter />
      </FooterLayout>
    </Fragment>
  );
};

export default Lease;
