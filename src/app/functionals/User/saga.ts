import { put, call, takeLatest, all } from 'redux-saga/effects'
import * as api from './api';
import actiontypes from './actionTypes';
import * as actions from './actions';

export function* getUserInfo() {
  try {
    const user = yield call(api.getAllUser)
    yield put(actions.getAllUserSuccess(user))
  } catch (error) {
    yield put(actions.getAllUserFail())
  }
}

export function* watchGetUserInfo() {
  yield takeLatest(actiontypes.GET_ALL_USER_REQUEST, getUserInfo)
}

export default function* root() {
  yield all([watchGetUserInfo()])
}