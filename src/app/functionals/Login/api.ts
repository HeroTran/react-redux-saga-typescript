import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';
import { UserInfo, PublisherInfo } from './actionTypes';
import { Map } from 'immutable';

export function requestLogin(data: Newzik.LoginData) {
  const request: apiHelper.RequestPostApi<Newzik.LoginData> = {
    url: API_URL.API_LOGIN,
    data: {
      username: data.username,
      password: data.password
    }
  };
  return apiHelper.login<any, Newzik.LoginData>(request)
}

export function requestAuthorize(data: Newzik.AuthorizeData) {
  const urlParams = new URLSearchParams(window.location.search);
  const authorizeData: Newzik.AuthorizeData = {
    user_oauth_approval: 'true',
    authorize: 'Authorize'
  }
  if (urlParams.get('scope')) {
    authorizeData[`scope.${urlParams.get('scope')}`] = data[`scope.${urlParams.get('scope')}`];
  }
  const request: apiHelper.RequestPostApi<Newzik.AuthorizeData> = {
    url: API_URL.API_AUTHORIZE,
    data: authorizeData
  };
  return apiHelper.authorize<any, Newzik.AuthorizeData>(request)
}

export function checkAuthorize(query: string) {
  const request: apiHelper.RequestGetApi = {
    url: `${API_URL.API_AUTHORIZE}${query}`
  };
  return apiHelper.get<any>(request);
}

export function getUserInfo() {
  const request: apiHelper.RequestGetApi = {
    url: API_URL.API_USER_INFO
  };
  return apiHelper.get<UserInfo>(request);
}

export function getPublisherInfo(clientID: string) {
  const request: apiHelper.RequestGetApi = {
    url: `${API_URL.API_PUBLISHER_INFO}?clientID=${clientID}`
  };
  return apiHelper.get<PublisherInfo>(request);
}

export function forgotPassword(values: Map<string, string>) {
  const url = encodeURI(`${API_URL.API_FORGOT_PASSWORD}/${values.get('email')}`);
  return apiHelper.forgotPassword(url);
}