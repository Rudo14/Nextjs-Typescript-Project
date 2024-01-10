import { RegistrationStateType } from '../../store/reducers/interfaces';
import { RegistrationBody } from '../../store/action/interfaces';

export type RegistrationProps = {
  registrationReducer: RegistrationStateType;
  registrationAction: (body: RegistrationBody) => void;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
};
export type RegistrationStateProps = {
  registrationReducer: RegistrationStateType;
};
