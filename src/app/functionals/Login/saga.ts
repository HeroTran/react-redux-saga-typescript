import {  put, call,  takeLatest, all } from 'redux-saga/effects'
import * as api from './api'
import * as actions from './actions';
import actiontypes from './actionTypes';

export function* getUserInfo() {
  const products = yield call(api.getUserInfo)
  yield put(actions.saveUserInfo(products))
}

export function* watchGetUserInfo() {
  yield takeLatest(actiontypes.GET_USER_INFO, getUserInfo)
}

export default function* root() {
  yield all([watchGetUserInfo()])
}