import { createSelector } from 'reselect';
import { AppStateRecord } from '../types';
import { getLocalStore } from '../../utils/localStorage';
import { IS_LOGIN_KEY } from './constants';

export const getAuthState = (state: AppStateRecord) => {
  return state.get('authUser')
}

export const getFormStates = (state: AppStateRecord) => {
  return state.get('form');
}

export const makeSelectLoginState = () => {
  const isLogin = getLocalStore(IS_LOGIN_KEY);
  return isLogin && isLogin === 'true' ? true : false;
}

export const makeSelectUserNameState = createSelector(
  getAuthState,
  user => user.get('login').get('userInfo').name
);

export const makeErrorRegisterUser = createSelector(
  getAuthState,
  user => {
    return user.get('login').get('token')
  }
);

export const makeSelectFormRegisterProps = createSelector(
  getFormStates,
  form => form.get('RegisterForm')
);