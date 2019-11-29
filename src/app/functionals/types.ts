import { Record } from 'immutable';
import { RouterAction } from 'connected-react-router/immutable';
import { LanguageFactory, LanguageRecord } from './Language/types';
import { UserStateRecord, UserStateFactory } from './User/types';
import { AuthStateRecord, AuthStateFactory } from './LoginRegister/types';
import { LanguageAction } from './Language/actionTypes';
import { HomeRecord, HomeStateFactory } from 'app/functionals/Home/types';

export type AppStateRecord = Record<AppState>;

export interface AppState {
  form: any;
  home: HomeRecord;
  language: LanguageRecord;
  user: UserStateRecord;
  authUser: AuthStateRecord;
  router: any
}

const appStateDefault: AppState = {
  form: {},
  home: HomeStateFactory(),
  language: LanguageFactory(),
  user: UserStateFactory(),
  authUser: AuthStateFactory(),
  router: {}
}
export const AppStateFactory = Record(appStateDefault);

export type RootAction =
  | LanguageAction
  | RouterAction;