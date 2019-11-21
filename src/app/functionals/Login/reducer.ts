import actionTypes, {
  LoginRegisterActions, UpdateShowAuthorize, SaveUserInfo, Forgot, SavePublisherInfo
} from './actionTypes';
import { LoginRecord, LoginFactory, ForgotRecord, ForgotFactory } from './types';
import { combineReducers } from 'redux-immutable';

const initialLoginState: LoginRecord = LoginFactory();

function login(state: LoginRecord = initialLoginState, action: LoginRegisterActions) {
  switch (action.type) {
    case actionTypes.UPDATE_SHOW_AUTHORIZE: {
      const isShowAuthorize = (<UpdateShowAuthorize>action).payload;
      return state.set('isShowAuthorize', isShowAuthorize);
    }
    case actionTypes.SAVE_USER_INFO: {
      const info = (<SaveUserInfo>action).payload;
      return state
        .set('userName', info.name)
        .set('userEmail', info.email)
    }
    case actionTypes.SAVE_PUBLISHER_INFO: {
      const info = (<SavePublisherInfo>action).payload;
      return state
        .set('publisherName', info.companyName)
        .set('publisherUrl', info.websiteUrl)
    }
    default:
      return state;
  }
}

const initialForgotState: ForgotRecord = ForgotFactory();
function forgot(state: ForgotRecord = initialForgotState, action: LoginRegisterActions) {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD: {
      const email = (<Forgot>action).payload;
      return state.set('email', email);
    }
    default:
      return state;
  }
}

export default combineReducers({
  login,
  forgot,
});