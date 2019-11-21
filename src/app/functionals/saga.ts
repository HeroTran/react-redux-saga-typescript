import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../functionals/Login';
export function* watchNewGeneratedNumberRequestStart() {
  yield 1
}
export const rootSaga = function* root() {
  yield all([fork(userSaga)]);
};