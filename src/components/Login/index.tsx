import React, { FC, useState } from 'react';
import { LoginProps } from './interfaces';
import Image from 'next/image';
import Form from 'antd/lib/form';
import ButtonComponent from '../../core-ui/Button/index';
import Input from '../../core-ui/Input/index';
import { connect } from 'react-redux';
import { RegistrationStateProps } from '../Registration/interfaces';
import _ from 'lodash';
import styles from './styles.module.scss'

const LoginComponent: FC<LoginProps> = ({ registrationReducer, setMainState }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPasswordState, setShowPasswordState] = useState(false);
  const [findState, setFindState] = useState('');
  const handleUnLock = () => {
    setShowPasswordState(false);
  };
  const handleLock = () => {
    setShowPasswordState(true);
  };
  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousState) => ({ ...previousState, [name]: value }));
    return false;
  };
  const handleClick = () => {
    setMainState('signUp');
  };
  const hadleClick = () => {
    const datan = _.find(registrationReducer.data, function (o) {
      return o.email === formData.email && o.password === formData.password;
    });
    if (datan && formData.email !== '' && formData.password !== '') {
      setFindState('success');
      setMainState('dashboard');
    } else {
      setFindState('error');
      setMainState('');
    }
  };
  return (
    <>
      <div className={styles.login_box}>
        <div className="registr-box">
          <div className="middle-box">
            <div className="title-box-bar">
              <h1>Login</h1>
            </div>
            <div className="form-box-bar">
              <Form>
                <Form.Item label="Email">
                  <Input onChange={handleChange} name="email" value={formData.email} type="email" />
                </Form.Item>
                <Form.Item label="Password">
                  <Input
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    type={!showPasswordState ? 'password' : 'text'}
                  />
                  {!showPasswordState ? (
                    <span className="unblock-password mt-2" onClick={handleLock} role="button" tabIndex={0}>
                      <Image src={require('../../../public/img/icon-modal/lock.svg')} alt={''} />
                    </span>
                  ) : (
                    <span className="unblock-password mt-2 unlock" onClick={handleUnLock} role="button" tabIndex={0}>
                      <Image src={require('../../../public/img/icon-modal/unlock.svg')} alt={''} />{' '}
                    </span>
                  )}
                </Form.Item>
                {findState === 'error' && <p className="error">Wrong email or password.</p>}
                <ButtonComponent onSubmit={hadleClick} title="Sign In" className="mt-5" />
              </Form>
            </div>
            <div onClick={handleClick}>
              <p className="signup-text">Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateFromProps = ({ registrationReducer }: RegistrationStateProps) => ({
  registrationReducer,
});

export default connect(mapStateFromProps)(LoginComponent);
