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

export function registerUser(data: API.RegisterData) {
  const request: apiHelper.RequestPostApi<API.RegisterData> = {
    url: API_URL.SIGN_UP,
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    }
  };
  return apiHelper.register<API.AuthRegister, API.RegisterData>(request)
}

export function findByUserByCode(code: string) {
  const request: apiHelper.RequestPostApi<API.AuthFindByCode> = {
    url: API_URL.FIND_TOKEN_BY_CODE,
    data: {
      codeLogin: code
    }
  };
  return apiHelper.getTokenByCode<API.AuthLogin, API.AuthFindByCode>(request)
}

export function findByUserByToken() {
  const request: apiHelper.RequestPostApi<{}> = {
    url: API_URL.FIND_USER_BY_TOKEN,
    data: {}
  };
  return apiHelper.post<API.AuthLogin, {}>(request)
}