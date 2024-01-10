import React, { FC, useState } from 'react';
import { RegistrationProps, RegistrationStateProps } from './interfaces';
import Image from 'next/image';
import Form from 'antd/lib/form';
import ButtonComponent from '../../core-ui/Button/index';
import Input from '../../core-ui/Input/index';
import { connect } from 'react-redux';
import { registrationAction } from '../../store/action/RegistrationAction';
import { RegistrationBody } from '../../store/action/interfaces';
import styles from './styles.module.scss'

const validEmailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const RegistrationComponent: FC<RegistrationProps> = ({ registrationReducer, registrationAction, setMainState }) => {
  const [formData, setFormData] = useState({
    password: '',
    firstName: '',
    lastName: '',
  });
  const [emailData, setEmailData] = useState({
    email: '',
  });
  const [regexEmail, setRegexEmail] = useState(false);
  const [showPasswordState, setShowPasswordState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>, stateName: string) => {
    const { value } = e.target;
    setEmailData((prevState) => ({ ...prevState, [stateName]: value }));
    setRegexEmail(validEmailRegex.test(emailData.email));
  };

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
    window.location.href = '/';
  };

  const handleSignUp = () => {
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: emailData.email,
      password: formData.password,
    };
    setErrorState(true);
    registrationAction(body);
    if (
      !formData.firstName  ||
      !formData.lastName  ||
      !emailData.email  ||
      formData.password.length < 6 ||
      !regexEmail
    ) {
      setMainState('signUp');
    } else if (
      formData.firstName  ||
      formData.lastName  ||
      emailData.email  ||
      formData.password.length > 5 ||
      regexEmail
    ) {
      setMainState('dashboard');
    }
  };
  
  return (
    <>
      <div className={styles.registr_box}>
        <div className="registr-box">
          <div className={`middle-box ${styles.registration_middle_box}`}>
            <div className="title-box-bar">
              <h1>Registration</h1>
            </div>
            <div className="form-box-bar">
              <Form>
                <Form.Item label="First Name">
                  <Input onChange={handleChange} name="firstName" value={formData.firstName} type="firstName" />
                  {errorState && formData.firstName === '' && <p className="error">Your name is missing</p>}
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input onChange={handleChange} name="lastName" value={formData.lastName} type="lastName" />
                  {errorState && formData.lastName === '' ? <p className="error">Your last name is missing</p> : ''}
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    onChange={(e) => handleChangeEmail(e, 'email')}
                    name="email"
                    value={emailData.email}
                    type="email"
                  />
                  {errorState && !regexEmail && <p className="error">Your email is missing</p>}
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
                      <Image src={require('../../../public/img/icon-modal/unlock.svg')} alt={''} />
                    </span>
                  )}
                  {errorState && formData.password.length < 6 ? (
                    <p className="error">Your password should be at least 6 characters</p>
                  ) : (
                    ''
                  )}
                </Form.Item>
                <ButtonComponent onSubmit={handleSignUp} title="Sign Up" className="mt-5" />
              </Form>
            </div>
            <div onClick={handleClick}>
              <p className="signup-text">Sign In</p>
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

const mapDispatchToProps = (dispatch: (event: any) => void) => ({
  registrationAction: (body: RegistrationBody) => dispatch(registrationAction(body)),
});

export default connect(mapStateFromProps, mapDispatchToProps)(RegistrationComponent);
