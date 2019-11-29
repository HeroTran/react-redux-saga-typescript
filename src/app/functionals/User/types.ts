import { Record, List } from 'immutable';

export interface UserState {
  userList: List<UserRecord>;
}

const userDefault: API.User = {
  _id: '',
  userId: 0,
  name: '',
  email: '',
  date: '',
  tokenFB: '',
  code: ''
}

export type UserRecord = Record<API.User>;
export const UserFactory = Record(userDefault);

const userStateDefault: UserState = {
  userList: List<UserRecord>()
}

export type UserStateRecord = Record<UserState>;
export const UserStateFactory = Record(userStateDefault);