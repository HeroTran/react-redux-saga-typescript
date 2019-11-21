import actionTypes from './actionTypes';
import { UserStateRecord, UserStateFactory } from './types';

const initialState: UserStateRecord = UserStateFactory();

export default function user(state: UserStateRecord = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_ALL_USER_REQUEST: {
      console.log('GET_ALL_USER_REQUEST');
      return state;
    }
    case actionTypes.GET_ALL_USER_SUCCESS: {
      const userInfo = action.payload;
      console.log(userInfo.data);
      return state;
    }
    case actionTypes.GET_ALL_USER_FAIL: {
      const data = action.payload;
      console.log(data);
      return state;
    }
    default:
      return state;
  }
}