import * as UserTypes from './types';
import { List } from 'immutable';

/**function reducer using for Client list */
export function fetchListUser(state: any, action: any) {
  const res = action.payload;
  const listUser = List<any>(res.data.map(user => UserTypes.UserFactory(user)));
  return state.set('userList', listUser)
}