import React, { FC } from 'react';
import { DashboardProps } from './interfaces';
import Image from 'next/image';
import ButtonComponent from '../../core-ui/Button/index';
import styles from './styles.module.scss'

const DashboardComponent: FC<DashboardProps> = ({ setMainState }) => {
  const handleClick = () => {
    setMainState('signIn');
  };
  return (
    <>
      <div className={styles.dashboard_box}>
        <div>
          <div className={styles.welcome_box}>
            <div className={styles.img_box}>
              <Image src={require('../../../public/img/icon-modal/waving-hand.jpg')} alt={''} />
            </div>
            <h1>Welcome!</h1>
          </div>
          <ButtonComponent onSubmit={handleClick} title="Log Out" className={styles.dashboard_button} />
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
