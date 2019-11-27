import { Record, List } from 'immutable';

export interface UserState {
  userList: List<UserRecord>;
}

const userDefault: API.User = {
  _id: '5ddb4e251f2468335856fb30',
  userId: 1,
  name: 'test01',
  email: 'test01@gmail.com',
  password: '$2b$10$9r2ONIGA7pwLHiOnlpyXkOgIE.9OnqSbV0J5sY9p0T.gEz4x4LlQ2',
  deleted: 0,
  date: '2019-11-25T03:44:08.319Z'
}

export type UserRecord = Record<API.User>;
export const UserFactory = Record(userDefault);

const userStateDefault: UserState = {
  userList: List<UserRecord>()
}

export type UserStateRecord = Record<UserState>;
export const UserStateFactory = Record(userStateDefault);