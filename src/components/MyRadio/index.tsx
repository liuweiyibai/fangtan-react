import React, { useState, useImperativeHandle, forwardRef } from 'react';
import styles from './index.module.less';

interface MyRadioProps {
  ref: any;
}

/**
 * hooks 父子组件通讯
 * @param props
 * @param ref
 */
const MyRadio = (props: MyRadioProps, ref: any) => {
  const [checked, setChecked] = useState<boolean>(false);

  useImperativeHandle(ref, () => {
    return {
      checked,
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChecked(e.target.checked);
  };

  return (
    <span className={styles['my-radio']} ref={ref}>
      <input type="checkbox" onChange={handleChange} />
      <span className={!checked ? styles['none-before'] : ''} />
    </span>
  );
};

export default forwardRef(MyRadio);
