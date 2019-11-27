import { combineReducers } from 'redux-immutable';
import {
  LoginRecord,
  LoginFactory,
  UserInfoFactory,
  RegisterRecord,
  RegisterFactory
} from './types';
import actionTypes, { LoginType, LoginSuccessAction } from './actionTypes';

const initialLoginState: LoginRecord = LoginFactory();

export function loginReducer(state: LoginRecord = initialLoginState, action: LoginType) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      const payload = (<LoginSuccessAction>action).payload;
      return state.set('isSuccess', payload.isSuccess)
        .set('token', payload.token)
        .set('userInfo', UserInfoFactory(payload.userInfo));
    case actionTypes.LOGOUT_SUCCESS:
      return state.set('userInfo', UserInfoFactory());
    default:
      return state;
  }
}

const initialRegisterState: RegisterRecord = RegisterFactory();
export function registerReducer(state = initialRegisterState, action: any) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      const payload = Boolean(action.payload);
      return state.set('isSuccess', payload);
    default:
      return state;
  }
}

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
});
