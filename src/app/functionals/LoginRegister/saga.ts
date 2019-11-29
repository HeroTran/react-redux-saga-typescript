import { put, takeLatest, all, call } from 'redux-saga/effects'
import actionTypes, { LoginRequestAction, RegisterRequestAction } from './actionTypes';
import { setLocalStore, removeLocalStore, getLocalStore } from '../../utils/localStorage';
import { ACCESS_TOKEN_KEY, IS_LOGIN_KEY, AUTHORIZE_CODE } from './constants';
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
    removeLocalStore(ACCESS_TOKEN_KEY);
    setLocalStore(IS_LOGIN_KEY, 'false');
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

export function* userRegister(action: RegisterRequestAction) {
  const registerData = action.payload;
  try {
    const registerInfo = yield call(api.registerUser, registerData);
    const authRegister: API.AuthRegister = {
      isSuccess: registerInfo.data.isSuccess,
    }
    yield put(actions.userRegisterSuccess(authRegister));
    yield put(push('/login'))
  } catch (error) {
    yield put(actions.userRegisterFailure(error))
  }
}

export function* checkStatusLogin(action: any) {
  const code = action.payload;
  try {
    const loginInfo = yield call(api.findByUserByCode, code);
    const authLoginFB: API.AuthLogin = {
      isSuccess: loginInfo.data.isSuccess,
      token: loginInfo.data.data.tokenFB,
      userInfo: loginInfo.data.data
    }
    setLocalStore(ACCESS_TOKEN_KEY, authLoginFB.token);
    setLocalStore(IS_LOGIN_KEY, 'true');
    setLocalStore(AUTHORIZE_CODE, code);
    yield put(actions.checkLoginStatusSuccess(authLoginFB));
    yield put(push('/'))
  } catch (error) {
    removeLocalStore(ACCESS_TOKEN_KEY);
    setLocalStore(IS_LOGIN_KEY, 'false');
    yield put(actions.checkLoginStatusFailure(error))
  }
}

export function* watchCheckStatusLogin() {
  yield takeLatest(actionTypes.CHECK_STATUS_LOGIN_REQUEST, checkStatusLogin)
}

export function* watchUserRegister() {
  yield takeLatest(actionTypes.REGISTER_REQUEST, userRegister)
}

export function* getUserInfo() {
  const token = getLocalStore(ACCESS_TOKEN_KEY);
  try {
    const authInfo = yield call(api.findByUserByToken);
    const authLoginFB: API.AuthLogin = {
      isSuccess: authInfo.data.isSuccess,
      token: token,
      userInfo: authInfo.data.data
    }
    yield put(actions.getUserSuccess(authLoginFB));
  } catch (error) {
    yield put(actions.getUserFailure(error))
  }
}

export function* watchGetUserInfo() {
  yield takeLatest(actionTypes.GET_USER_REQUEST, getUserInfo)
}

export default function* root() {
  yield all([watchUserLogin(), watchUserLogout(), watchUserRegister(), watchCheckStatusLogin(), watchGetUserInfo()])
}