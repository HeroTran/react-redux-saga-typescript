import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../functionals/User';

export const rootSaga = function* root() {
  yield all([fork(userSaga)]);
};