import React, { FC, useState } from 'react';
import { MainProps } from './interfaces';
import SignIn from '../Login/index';
import SignUp from '../Registration/index';
import Dashboard from '../Dashboard/index';

const MainComponent: FC<MainProps> = () => {
  const [mainState, setMainState] = useState('');
  const getContent = (data: any) => {
    switch (data) {
      case 'signIn':
        return <SignIn setMainState={setMainState} />;
        break;
      case 'signUp':
        return <SignUp setMainState={setMainState} />;
        break;
      case 'dashboard':
        return <Dashboard setMainState={setMainState} />;
      default:
        return <SignIn setMainState={setMainState} />;
    }
  };
  return <>{getContent(mainState)}</>;
};

export default MainComponent;
