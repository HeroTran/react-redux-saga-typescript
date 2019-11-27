import { put, takeLatest, all, call } from 'redux-saga/effects'
import actionTypes, { LoginRequestAction } from './actionTypes';
import { setLocalStore, removeLocalStore } from '../../utils/localStorage';
import { ACCESS_TOKEN_KEY, IS_LOGIN_KEY } from './constants';
import { push } from 'connected-react-router/immutable';
import * as api from './api';
import * as actions from './actions';

export function* userLogin(action: LoginRequestAction) {
  const loginData = action.payload;
  try {
    const loginInfo = yield call(api.loginUser, loginData);
    const authLogin: API.AuthLogin = {
      isSuccess: loginInfo.data.isSuccess,
      token: loginInfo.data.token,
      userInfo: loginInfo.data.data
    }
    setLocalStore(ACCESS_TOKEN_KEY, authLogin.token);
    setLocalStore(IS_LOGIN_KEY, 'true');
    yield put(actions.userLoginSuccess(authLogin));
    yield put(push('/user'))
  } catch (error) {
    yield put(actions.userLoginFailure(error))
  }
}

export function* watchUserLogin() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, userLogin)
}

export function* userLogout() {
  try {
    yield call(api.logoutUser);
    removeLocalStore(ACCESS_TOKEN_KEY);
    removeLocalStore(IS_LOGIN_KEY);
    yield put(push('/login'))
  } catch (error) {
    yield put(actions.userLogoutFailure(error))
  }
}

export function* watchUserLogout() {
  yield takeLatest(actionTypes.LOGOUT_SUCCESS, userLogout)
}

export default function* root() {
  yield all([watchUserLogin(), watchUserLogout()])
}