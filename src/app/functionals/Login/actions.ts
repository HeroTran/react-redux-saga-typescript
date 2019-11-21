import actionTypes, * as LoginRegisterActions from './actionTypes';

export function getUserInfo() {
  return {
    type: actionTypes.GET_USER_INFO,
  }
}

export function saveUserInfo(info: LoginRegisterActions.UserInfo): LoginRegisterActions.SaveUserInfo {
  return {
    type: actionTypes.SAVE_USER_INFO,
    payload: info
  }
};