import actionTypes from './actionTypes';

export const getAllUser = () => {
  return {
    type: actionTypes.GET_ALL_USER_REQUEST,
  }
}

export const getAllUserSuccess = (data) => {
  return {
    type: actionTypes.GET_ALL_USER_SUCCESS,
    payload: data
  }
}

export const getAllUserFail = () => {
  return {
    type: actionTypes.GET_ALL_USER_FAIL,
  }
}