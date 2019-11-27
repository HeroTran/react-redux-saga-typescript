import { Record } from 'immutable';

const userInfoDefault: API.User = {
  _id: '',
  userId: 1,
  name: '',
  email: '',
  password: '',
  deleted: 0,
  date: ''
}

export type UserInfoRecord = Record<API.User>;
export const UserInfoFactory = Record(userInfoDefault);

const loginDefault: API.AuthLogin = {
  isSuccess: false,
  token: '',
  userInfo: UserInfoFactory()
}

const registerDefault: API.Register = {
  isSuccess: false
}

export type LoginRecord = Record<API.AuthLogin>;
export const LoginFactory = Record(loginDefault);

export type RegisterRecord = Record<API.Register>;
export const RegisterFactory = Record(registerDefault);

export interface AuthState {
  login: LoginRecord;
  register: RegisterRecord;
}

const authStateDefault: AuthState = {
  login: LoginFactory(),
  register: RegisterFactory(),
}

export type AuthStateRecord = Record<AuthState>;
export const AuthStateFactory = Record(authStateDefault);