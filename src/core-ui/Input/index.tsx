import React, { FC } from 'react';
import AntInput from 'antd/lib/input';

import { InputProps } from '../interfaces';
import styles from './styles.module.scss';

const Input: FC<InputProps> = ({ onChange, value, type, name, className, required }) => {
  return (
    <AntInput
      onChange={onChange}
      name={name}
      required={required}
      value={value}
      className={`${className} ${styles.input_box}`}
      type={type || 'name'}
    />
  );
};

export default Input;
