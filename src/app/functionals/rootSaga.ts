import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../functionals/User';
import { authSaga } from '../functionals/LoginRegister';
import { homeSaga } from '../functionals/Home';

export const rootSaga = function* root() {
  yield all([fork(userSaga), fork(authSaga), fork(homeSaga)]);
};