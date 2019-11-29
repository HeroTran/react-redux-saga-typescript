import { combineReducers } from 'redux-immutable';
import {
  LoginRecord,
  LoginFactory,
  UserInfoFactory,
  RegisterRecord,
  RegisterFactory
} from './types';
import actionTypes, { LoginType, LoginSuccessAction, CheckLoginSuccessAction, GetUserInfoSuccessAction } from './actionTypes';
import * as reducerUtils from './reducerUtils';

const initialLoginState: LoginRecord = LoginFactory();

export function loginReducer(state: LoginRecord = initialLoginState, action: LoginType) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return reducerUtils.loginUser(state, <LoginSuccessAction>action);
    case actionTypes.LOGOUT_SUCCESS:
      return state.set('userInfo', UserInfoFactory());
    case actionTypes.CHECK_STATUS_LOGIN_SUCCESS:
      return reducerUtils.checkLoginStatus(state, <CheckLoginSuccessAction>action);
    case actionTypes.GET_USER_SUCCESS:
      return reducerUtils.getUserInfo(state, <GetUserInfoSuccessAction>action);
    default:
      return state;
  }
}

const initialRegisterState: RegisterRecord = RegisterFactory();
export function registerReducer(state = initialRegisterState, action: any) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return state.set('isSuccess', Boolean(action.payload));
    default:
      return state;
  }
}

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
});
