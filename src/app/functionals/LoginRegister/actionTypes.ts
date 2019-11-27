export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  REGISTER_CHECK_PASSWORD: 'REGISTER_CHECK_PASSWORD',
  CHANGE_REMEMBER_ME: 'CHANGE_REMEMBER_ME',
  GET_PUBLISHER_INFO_SUCCESS: 'GET_PUBLISHER_INFO_SUCCESS',
  GET_PUBLISHER_INFO_FAILURE: 'GET_PUBLISHER_INFO_FAILURE'
};
export default actionTypes;

export interface LoginRequestAction {
  type: typeof actionTypes.LOGIN_REQUEST;
  payload: API.LoginData
};

export interface LoginSuccessAction {
  type: typeof actionTypes.LOGIN_SUCCESS;
  payload: API.AuthLogin
};

export interface LoginFailureAction {
  type: typeof actionTypes.LOGIN_FAILURE;
  payload: any
};

export type LoginType = LoginRequestAction | LoginSuccessAction | LoginFailureAction