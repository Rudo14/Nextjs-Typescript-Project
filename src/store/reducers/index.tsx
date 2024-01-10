import { combineReducers } from 'redux';

import registrationReducer from './registrationReducers';

type HTTPServiceType = (dispatch: (event: RootAction) => void) => Promise<void | unknown>;

type VoidActioneType = (dispatch: (event: RootAction) => void) => void;

export type DispatchPayloadType = {
  type: string;
  boolean?: boolean;
  payload?: any;
  object?: object;
};

export type RootAction = DispatchPayloadType | HTTPServiceType | VoidActioneType;

const appReducer = combineReducers({
  registrationReducer,
});

export default appReducer;
