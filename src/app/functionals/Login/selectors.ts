import { createSelector } from 'reselect';
import { AppStateRecord } from '../types';

export const getUserState = (state: AppStateRecord) => {
  return state.get('user')
}

export const getFormStates = (state: AppStateRecord) => {
  return state.get('form');
}

export const makeSelectFormRegisterProps = createSelector(
  getFormStates,
  form => form.get('RegisterForm')
);

export const makeSelectUserName = createSelector(
  getUserState,
  login => login.get('login').get('userName')
);

export const makeSelectUserEmail = createSelector(
  getUserState,
  login => login.get('login').get('userEmail')
);

export const makeSelectPublisherName = createSelector(
  getUserState,
  login => login.get('login').get('publisherName')
);

export const makeSelectPublisherUrl = createSelector(
  getUserState,
  login => login.get('login').get('publisherUrl')
);

export const makeSelectForgotEmail = createSelector(
  getUserState,
  login => login.get('forgot').get('email')
);