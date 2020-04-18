import { all, fork } from 'redux-saga/effects';
import { userSaga } from '../functionals/User';
import { authSaga } from '../functionals/LoginRegister';
import { homeSaga } from '../functionals/Home';
import errorSaga from '../functionals/Error/saga';

export const rootSaga = function* root() {
  yield all([fork(userSaga), fork(authSaga), fork(homeSaga), fork(errorSaga)]);
};