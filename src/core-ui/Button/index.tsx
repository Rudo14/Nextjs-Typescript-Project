import React, { FC } from 'react';
import Button from 'antd/lib/button';
import { ButtonProps } from '../interfaces';
import styles from './styles.module.scss';


const ButtonComponent: FC<ButtonProps> = ({ title, className, onSubmit }) => {
  return (
    <Button onClick={onSubmit} className={`${className} ${styles.button_box}`} type="primary">
      {title}
    </Button>
  );
};

export default ButtonComponent;
