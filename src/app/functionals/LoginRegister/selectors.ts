import { createSelector } from 'reselect';
import { AppStateRecord } from '../types';
import { getLocalStore } from '../../utils/localStorage';
import { IS_LOGIN_KEY } from './constants';

export const getUserState = (state: AppStateRecord) => {
  return state.get('user')
}

export const getFormStates = (state: AppStateRecord) => {
  return state.get('form');
}

export const makeSelectLoginState = () => {
  const isLogin = getLocalStore(IS_LOGIN_KEY);
  return isLogin && isLogin === 'true' ? true : false;
}
export const makeSelectFormRegisterProps = createSelector(
  getFormStates,
  form => form.get('RegisterForm')
);