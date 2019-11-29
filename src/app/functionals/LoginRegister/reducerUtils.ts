import * as AuthTypes from './types';
import { LoginSuccessAction, CheckLoginSuccessAction, GetUserInfoSuccessAction } from './actionTypes';

export function loginUser(state: AuthTypes.LoginRecord, action: LoginSuccessAction) {
  const payload = (<LoginSuccessAction>action).payload;
  return state.set('isSuccess', payload.isSuccess)
    .set('token', payload.token)
    .set('userInfo', AuthTypes.UserInfoFactory(payload.userInfo));
}

export function checkLoginStatus(state: AuthTypes.LoginRecord, action: CheckLoginSuccessAction) {
  const payload = action.payload;
  return state.set('isSuccess', payload.isSuccess)
    .set('token', payload.token)
    .set('userInfo', AuthTypes.UserInfoFactory(payload.userInfo));
}

export function getUserInfo(state: AuthTypes.LoginRecord, action: GetUserInfoSuccessAction) {
  const payload = action.payload;
  return state.set('isSuccess', payload.isSuccess)
    .set('token', payload.token)
    .set('userInfo', AuthTypes.UserInfoFactory(payload.userInfo));
}