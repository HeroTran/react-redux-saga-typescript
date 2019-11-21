import { Record } from 'immutable';
import { RouterAction } from 'connected-react-router';
import { LanguageFactory, LanguageRecord } from './Language/types';
import { UserStateRecord, UserStateFactory } from './User/types';
import { LanguageAction } from './Language/actionTypes';

export type AppStateRecord = Record<AppState>;

export interface AppState {
  form: any;
  language: LanguageRecord;
  user: UserStateRecord;
  router: any
}

const appStateDefault: AppState = {
  form: {},
  language: LanguageFactory(),
  user: UserStateFactory(),
  router: {}
}
export const AppStateFactory = Record(appStateDefault);

export type RootAction =
  | LanguageAction
  | RouterAction;