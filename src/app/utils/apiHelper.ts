import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';
import { trimURLProtocolAndDomain } from './helper';
import { API_URL } from '../functionals/Login/constants';

const META_API = process.env.REACT_APP_API_URL as string;

export interface RequestGetApi {
  url: string;
}

export function get<T>(request: RequestGetApi) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    responseType: 'json',
    withCredentials: true
  };
  const fetchData: AxiosPromise<T> = axios(req);
  return fetchData.then(res => {
    return Promise.resolve(res);
  });
}

export interface RequestPostApi<E = any> {
  url: string;
  data?: E;
}

export function login<T = any, E = any>(request: RequestPostApi<Newzik.LoginData>) {
  const params = new URLSearchParams();
  const data = request.data;
  if (data) {
    params.set('username', data.username);
    params.set('password', data.password);
    params.set('authenticated', 'false');
  }
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    },
    data: params,
    responseType: 'json',
    withCredentials: true,
    maxRedirects: 0
  };
  const postData: AxiosPromise<T> = axios(req);

  return postData;
}

export function authorize<T = any, E = any>(request: RequestPostApi<Newzik.AuthorizeData>) {
  const urlParams = new URLSearchParams(window.location.search);

  const params = new URLSearchParams();
  const data = request.data;
  if (data) {
    params.set('user_oauth_approval', `${data.user_oauth_approval}`);
    params.set(`scope.${urlParams.get('scope')}`, `${data[`scope.${urlParams.get('scope')}`]}`);
    params.set('authorize', data.authorize);
  }
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    },
    data: params,
    withCredentials: true
  };
  const postData: AxiosPromise<T> = axios(req);

  return postData;
}

export function isRedirect(response: AxiosResponse<any>) {
  if (response.config.url && response.request.responseURL && trimURLProtocolAndDomain(response.config.url) !== trimURLProtocolAndDomain(response.request.responseURL)) {
    return true;
  }
  return false;
}

export const isAuthorizeURL = (URL: string) => URL.indexOf(API_URL.API_AUTHORIZE) !== -1;
export const isCodeURL = (URL: string) => URL.indexOf(API_URL.API_CODE) !== -1;
export const isLoginURL = (URL: string) => URL.indexOf(API_URL.API_LOGIN) !== -1;
export const isInternalURL = (URL: string) => URL.indexOf(META_API) !== -1;

export function forgotPassword(url: string) {
  const req: AxiosRequestConfig = {
    url: META_API + url,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    responseType: 'json',
  };
  const postData = axios(req);

  return postData;
}