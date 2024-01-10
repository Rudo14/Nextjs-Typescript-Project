import { RegistrationStateType } from '../../store/reducers/interfaces';

export type LoginProps = {
  registrationReducer: RegistrationStateType;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
};
