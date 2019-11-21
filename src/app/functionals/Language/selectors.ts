import { createSelector } from 'reselect';
import { AppStateRecord } from '../types';

const getSelectLanguage = (state: AppStateRecord) =>
  state.get('language')

export const makeSelectLocale = createSelector(
    getSelectLanguage,
    (languageState) => languageState.get('locale'),
);
