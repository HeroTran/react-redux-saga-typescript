export const API_URL = {
  API_LOGIN: '/uaa/login',
  API_FACEBOOK_LOGIN: '/uaa/login/facebook',
  API_LOGOUT: '/uaa/logout',
  API_USER_INFO: '/uaa/user/me',
  API_PUBLISHER_INFO: '/uaa/client/publisher',
  API_AUTHORIZE: '/uaa/oauth/authorize',
  API_FORGOT_PASSWORD: '/ws3/user/password',
  API_CODE: '/uaa/code'
}

export enum ErrorURLComponent {
  ERROR = 'error',
  RETRY_URL = 'retry_url',
  CANCEL_URL = 'cancel_url'
}

export const FORGOT_PASSWORD = '/uaa/forgotpass';
export const FORGOT_PASSWORD_SUCCESS = '/uaa/forgotsuccess';
export const DEFAULT_NEWZIK_WEBSITE = 'https://newzik.com/';

export enum ForgotPasswordErrorType {
  NOT_FOUND_ENTITY = 'NOT_FOUND_ENTITY'
}

export enum LoginFailedError {
  INVALID_SCOPE = 'invalid_scope'
}