import { ForgotPasswordErrorType } from '../functionals/Login/constants';

export const trimURLProtocolAndDomain = (url: string) => {
  if (url.match(/\/\/[^\/]+\/([^\.]+)/) && (url.match(/\/\/[^\/]+\/([^\.]+)/) as RegExpMatchArray).length) {
    return (url.match(/\/\/[^\/]+\/([^\.]+)/) as RegExpMatchArray)[1];
  }
  return url;
}

export function setLocalStore(key: string, val: string) {
  window.localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStore(key: string) {
  const data = window.localStorage.getItem(key);
  if (data != null) {
    return JSON.parse(data);
  }
  return null;
}

export function removeLocalStore(key: string) {
  window.localStorage.removeItem(key);
}

export const isEmailNotFound = (error: Newzik.ErrorResponse) => !error.data.success && error.data.subType === ForgotPasswordErrorType.NOT_FOUND_ENTITY && error.data.httpStatusCode === 404;