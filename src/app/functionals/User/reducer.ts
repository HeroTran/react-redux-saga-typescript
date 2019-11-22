import actionTypes from './actionTypes';
import { UserStateRecord, UserStateFactory } from './types';
import * as reducerUtils from './reducerUtils';

const initialState: UserStateRecord = UserStateFactory();

export default function user(state: UserStateRecord = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_ALL_USER_SUCCESS: {
      return reducerUtils.fetchListUser(state, action);
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