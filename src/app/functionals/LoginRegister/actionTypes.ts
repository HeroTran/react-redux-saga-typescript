export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  REGISTER_CHECK_PASSWORD: 'REGISTER_CHECK_PASSWORD',
  CHANGE_REMEMBER_ME: 'CHANGE_REMEMBER_ME',
  GET_PUBLISHER_INFO_SUCCESS: 'GET_PUBLISHER_INFO_SUCCESS',
  GET_PUBLISHER_INFO_FAILURE: 'GET_PUBLISHER_INFO_FAILURE',
  CHECK_STATUS_LOGIN_REQUEST: 'CHECK_STATUS_LOGIN_REQUEST',
  CHECK_STATUS_LOGIN_SUCCESS: 'CHECK_STATUS_LOGIN_SUCCESS',
  CHECK_STATUS_LOGIN_FAILURE: 'CHECK_STATUS_LOGIN_FAILURE'
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
export interface CheckLoginRequestAction {
  type: typeof actionTypes.CHECK_STATUS_LOGIN_REQUEST;
  payload: String
};

export interface CheckLoginSuccessAction {
  type: typeof actionTypes.CHECK_STATUS_LOGIN_SUCCESS;
  payload: API.AuthLogin
};

export interface CheckLoginFailureAction {
  type: typeof actionTypes.CHECK_STATUS_LOGIN_FAILURE;
  payload: any
};

export interface GetUserInfoRequestAction {
  type: typeof actionTypes.GET_USER_REQUEST;
};

export interface GetUserInfoSuccessAction {
  type: typeof actionTypes.GET_USER_SUCCESS;
  payload: API.AuthLogin
};

export interface GetUserFailureAction {
  type: typeof actionTypes.GET_USER_FAILURE;
  payload: any
};

export type LoginType = LoginSuccessAction |
  CheckLoginSuccessAction |
  GetUserInfoSuccessAction;

export interface LogoutSuccessAction {
  type: typeof actionTypes.LOGOUT_SUCCESS;
};

export interface LogoutFailureAction {
  type: typeof actionTypes.LOGOUT_FAILURE;
  payload: any
};

export interface RegisterRequestAction {
  type: typeof actionTypes.REGISTER_REQUEST;
  payload: API.RegisterData
};

export interface RegisterSuccessAction {
  type: typeof actionTypes.REGISTER_SUCCESS;
  payload: API.AuthRegister
};

export interface RegisterFailureAction {
  type: typeof actionTypes.REGISTER_FAILURE;
  payload: any
};

export type RegisterType = RegisterSuccessAction | RegisterRequestAction | RegisterFailureAction;