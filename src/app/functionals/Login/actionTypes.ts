import { RouterAction } from 'connected-react-router';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  UPDATE_SHOW_AUTHORIZE: 'UPDATE_SHOW_AUTHORIZE',
  GET_USER_INFO: 'GET_USER_INFO',
  SAVE_USER_INFO: 'SAVE_USER_INFO',
  SAVE_PUBLISHER_INFO: 'SAVE_PUBLISHER_INFO',
  FORGOT_PASSWORD: 'FORGOT_PASS',
  FORGOT_PASSWORD_FAILURE: 'FORGOT_PASS_FAILURE',
};

export type LoginContainerAction = UserLoginDispatchActionType | RouterAction;
export type UserLoginDispatchActionType = Login | LoginFailure;

export interface Login {
  type: typeof actionTypes.LOGIN,
};

export interface LoginFailure {
  type: typeof actionTypes.LOGIN_FAILURE;
};

export interface Forgot {
  type: typeof actionTypes.FORGOT_PASSWORD,
  payload: string
};

export interface ForgotFailure {
  type: typeof actionTypes.FORGOT_PASSWORD_FAILURE;
};

export interface UpdateShowAuthorize {
  type: typeof actionTypes.UPDATE_SHOW_AUTHORIZE;
  payload: boolean;
};

export interface UserInfo {
  name: string;
  email: string;
}

export interface PublisherInfo {
  companyName: string;
  websiteUrl: string;
}

export interface SaveUserInfo {
  type: typeof actionTypes.SAVE_USER_INFO;
  payload: UserInfo;
};

export interface SavePublisherInfo {
  type: typeof actionTypes.SAVE_PUBLISHER_INFO;
  payload: PublisherInfo;
};

export type LoginRegisterActions = Login | LoginFailure | UpdateShowAuthorize | Forgot | ForgotFailure;

export default actionTypes;