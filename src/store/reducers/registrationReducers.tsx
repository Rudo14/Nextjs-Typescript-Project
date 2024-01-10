import { REGISTRATION } from '../constants';
import { DispatchPayloadType } from './index';
import { RegistrationStateType } from './interfaces';

const initialState: RegistrationStateType = {
  data: [],
};

const registrationReducer = (state = initialState, { type, payload }: DispatchPayloadType): RegistrationStateType => {
  switch (type) {
    case REGISTRATION.SUCCESS: {
      const newItem = {
        firstName: payload.firstName,
        lastName: payload.firstName,
        email: payload.email,
        password: payload.password,
      };
      const newData = [...state.data];
      newData.push(newItem);
      return {
        ...state,
        data: newData,
      } as RegistrationStateType;
    }
    default:
      return state;
  }
};

export default registrationReducer;
