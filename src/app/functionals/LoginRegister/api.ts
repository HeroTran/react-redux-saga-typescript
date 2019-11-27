import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function loginUser(data: API.LoginData) {
  const request: apiHelper.RequestPostApi<API.LoginData> = {
    url: API_URL.LOGIN,
    data: {
      email: data.email,
      password: data.password
    }
  };
  return apiHelper.login<API.AuthLogin, API.LoginData>(request)
}

export function logoutUser() {
  return apiHelper.logout<any, any>(API_URL.LOGOUT)
}