import { createSelector } from 'reselect';
import { AppStateRecord } from '../types';

export const getUserState = (state: AppStateRecord) => {
  return state.get('user')
}
export const makeSelectUserInfo = createSelector(
  getUserState,
  user => user.get('userInfo')
);