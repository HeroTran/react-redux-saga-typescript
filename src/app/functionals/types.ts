import { Record } from 'immutable';
import { RouterAction } from 'connected-react-router/immutable';
import { LanguageFactory, LanguageRecord } from './Language/types';
import { UserStateRecord, UserStateFactory } from './User/types';
import { AuthStateRecord, AuthStateFactory } from './LoginRegister/types';
import { LanguageAction } from './Language/actionTypes';

export type AppStateRecord = Record<AppState>;

export interface AppState {
  form: any;
  language: LanguageRecord;
  user: UserStateRecord;
  auth: AuthStateRecord;
  router: any
}

const appStateDefault: AppState = {
  form: {},
  language: LanguageFactory(),
  user: UserStateFactory(),
  auth: AuthStateFactory(),
  router: {}
}
export const AppStateFactory = Record(appStateDefault);

export type RootAction =
  | LanguageAction
  | RouterAction;