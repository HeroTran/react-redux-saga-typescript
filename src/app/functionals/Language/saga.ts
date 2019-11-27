import { put, takeLatest, all } from 'redux-saga/effects'
import actionTypes, { ChangeLocaleAction } from './actionTypes';
import * as actions from './actions';

export function* changeLocale(action: ChangeLocaleAction) {
  const languageLocale = action.payload;
  yield put(actions.changeLocale(languageLocale))
}

export function* watchChangeLocale() {
  yield takeLatest(actionTypes.CHANGE_LOCALE, changeLocale)
}

export default function* root() {
  yield all([watchChangeLocale()])
}