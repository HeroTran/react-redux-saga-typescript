import { Map } from 'immutable';
import {
  actionTypes,
  LoginRequestAction,
  LoginSuccessAction,
  LoginFailureAction,
  LogoutSuccessAction,
  LogoutFailureAction,
  RegisterRequestAction,
  RegisterSuccessAction,
  CheckLoginRequestAction,
  CheckLoginSuccessAction,
  CheckLoginFailureAction,
  GetUserInfoRequestAction,
  GetUserInfoSuccessAction,
  GetUserFailureAction
} from './actionTypes';

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

export function userLoginSuccess(userInfo: API.AuthLogin): LoginSuccessAction {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userInfo,
  };
}

export function userLoginFailure(error: any): LoginFailureAction {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  };
}

export function userLogoutSuccess(): LogoutSuccessAction {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
}

export function userLogoutFailure(error: any): LogoutFailureAction {
  return {
    type: actionTypes.LOGOUT_FAILURE,
    payload: error,
  };
}

export function userRegisterRequest(values: Map<string, string>): RegisterRequestAction {
  const registerInfo: API.RegisterData = {
    name: values.get('name') as string,
    email: values.get('email') as string,
    password: values.get('password') as string,
  }
  return {
    type: actionTypes.REGISTER_REQUEST,
    payload: registerInfo,
  };
}

export function userRegisterSuccess(registerInfo: API.AuthRegister): RegisterSuccessAction {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: registerInfo,
  };
}

export function checkLoginStatus(code: String): CheckLoginRequestAction {
  return {
    type: actionTypes.CHECK_STATUS_LOGIN_REQUEST,
    payload: code
  }
}
export function checkLoginStatusSuccess(authLoginFB: API.AuthLogin): CheckLoginSuccessAction {
  return {
    type: actionTypes.CHECK_STATUS_LOGIN_SUCCESS,
    payload: authLoginFB
  }
}

export function checkLoginStatusFailure(error: any): CheckLoginFailureAction {
  return {
    type: actionTypes.CHECK_STATUS_LOGIN_FAILURE,
    payload: error,
  };
}

export function getUserInfo(): GetUserInfoRequestAction {
  return {
    type: actionTypes.GET_USER_REQUEST,
  }
}
export function getUserSuccess(authLoginFB: API.AuthLogin): GetUserInfoSuccessAction {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: authLoginFB
  }
}

export function getUserFailure(error: any): GetUserFailureAction {
  return {
    type: actionTypes.GET_USER_FAILURE,
    payload: error,
  };
}