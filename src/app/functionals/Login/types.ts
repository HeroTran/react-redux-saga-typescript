import { Record } from 'immutable';

export interface Login {
  isShowAuthorize: boolean;
  userName: string;
  userEmail: string;
  publisherName: string;
  publisherUrl: string;
}
export interface Forgot {
  email: string;
}

export interface UserState {
  login: LoginRecord;
  forgot: ForgotRecord;
}

const loginDefault: Login = {
  isShowAuthorize: false,
  userName: '',
  userEmail: '',
  publisherName: '',
  publisherUrl: ''
}

const forgotDefault: Forgot = {
  email: ''
}

export type LoginRecord = Record<Login>;
export const LoginFactory = Record(loginDefault);
export type ForgotRecord = Record<Forgot>;
export const ForgotFactory = Record(forgotDefault);

const userStateDefault: UserState = {
  login: LoginFactory(),
  forgot: ForgotFactory()
}

export type UserStateRecord = Record<UserState>;
export const UserStateFactory = Record(userStateDefault);