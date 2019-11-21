import * as apiHelper from '../../utils/apiHelper';
import { API_URL } from './constants';

export function getAllUser() {
  const request: apiHelper.RequestGetApi = {
    url: API_URL.API_USER_INFO
  };
  return apiHelper.apiGet<any>(request);
}