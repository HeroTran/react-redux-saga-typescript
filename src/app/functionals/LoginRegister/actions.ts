import { Map } from 'immutable';
import { actionTypes, LoginRequestAction, LoginSuccessAction, LoginFailureAction } from './actionTypes';

export function userLoginRequest(values: Map<string, string>): LoginRequestAction {
  const loginInfo: API.LoginData = {
    email: values.get('email') as string,
    password: values.get('password') as string,
  }
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: loginInfo,
  };
}

export function userLoginSuccess(userInfo): LoginSuccessAction {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userInfo,
  };
}

export function userLoginFailure(error: any): LoginFailureAction {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: error,
  };
}