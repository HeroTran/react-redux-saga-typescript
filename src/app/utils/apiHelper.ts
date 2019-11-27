import axios, { AxiosRequestConfig, AxiosPromise, CancelTokenSource } from 'axios';
import {
  EXTENSION_DISPLAY_FILE
} from '../functionals/User/constants';

import { getAuthorizationHeader } from './helper';

const META_API = process.env.REACT_APP_API_URL;

const CancelToken = axios.CancelToken;
let source: CancelTokenSource = CancelToken.source();

export interface RequestGetApi {
  url: string;
}

export function download<T>(request: RequestGetApi) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'GET',
    headers: {
      'Content-Type': EXTENSION_DISPLAY_FILE,
      'Authorization': getAuthorizationHeader(),
      'Accept': 'application/json'
    },
    responseType: 'arraybuffer'
  };
  const fetchData: AxiosPromise<T> = axios(req);
  return fetchData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export function apiGet<T>(request: RequestGetApi, progressCb?: (e: ProgressEvent) => void) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': getAuthorizationHeader()
    },
    responseType: 'json',
    onDownloadProgress: progressCb
  };
  const fetchData: AxiosPromise<T> = axios(req);
  return fetchData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestPostApi<E = any> {
  url: string;
  data?: E;
}

export function post<T = any, E = any>(request: RequestPostApi<E>, cancelToken?: CancelTokenSource) {
  let req: AxiosRequestConfig;
  if (cancelToken) {
    req = {
      url: META_API + request.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': getAuthorizationHeader()
      },
      data: JSON.stringify(request.data),
      responseType: 'json',
      cancelToken: cancelToken.token
    };
  } else {
    req = {
      url: META_API + request.url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': getAuthorizationHeader()
      },
      data: JSON.stringify(request.data),
      responseType: 'json'
    };
  }
  const postData: AxiosPromise<T> = axios(req);
  return postData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestPostUploadApi<E> {
  url: string;
  data: E;
  uuid: string;
}
export function postUploadFile<T, E>(request: RequestPostUploadApi<E>, progressCb?: (e: ProgressEvent) => void) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url + request.uuid,
    data: request.data,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': getAuthorizationHeader()
    },
    onUploadProgress: progressCb,
    cancelToken: source.token
  };

  const postData: AxiosPromise<T> = axios(req);
  return postData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestPutApi<E> {
  url: string;
  data: E;
}

export function apiPut<T, E>(request: RequestPutApi<E>) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json'
  };

  const putData: AxiosPromise<T> = axios(req);
  return putData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestPatchApi<E> {
  url: string;
  data: E;
}

export function apiPatch<T, E>(request: RequestPatchApi<E>) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json'
  };
  const patchData: AxiosPromise<T> = axios(req);
  return patchData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestDeleteApi<E = any> {
  url: string;
  data?: E;
}

export function apiDelete<T, E>(request: RequestDeleteApi<E>) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': getAuthorizationHeader(),
    },
    data: JSON.stringify(request.data),
    responseType: 'json'
  };
  const delData: AxiosPromise<T> = axios(req);
  return delData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export interface RequestPatchApi<E> {
  url: string;
  data: E;
}

export function cancelUploadFile() {
  source.cancel('upload file was terminated');
  source = CancelToken.source();
}

export function login<T = any, E = any>(request: RequestPostApi<API.LoginData>) {
  const req: AxiosRequestConfig = {
    url: META_API + request.url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: JSON.stringify(request.data),
    responseType: 'json'
  };
  const postData: AxiosPromise<T> = axios(req);
  return postData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}

export function logout<T = any, E = any>(url : string) {
  const req: AxiosRequestConfig = {
    url: META_API + url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': getAuthorizationHeader(),
    },
    responseType: 'json'
  };
  const postData: AxiosPromise<T> = axios(req);
  return postData.then(res => {
    return Promise.resolve(res);
  }).catch(err => {
    console.log(err);
  });
}