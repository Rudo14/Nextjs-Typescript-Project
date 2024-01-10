import { REGISTRATION } from '../constants';
import { RegistrationBody } from './interfaces';
export const registrationAction = (body: RegistrationBody) => ({ type: REGISTRATION.SUCCESS, payload: body });
