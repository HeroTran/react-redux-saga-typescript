import { actionTypes, ChangeLocaleAction } from './actionTypes';
import { LanguageFactory, LanguageRecord } from './types';

const initialState: LanguageRecord = LanguageFactory();

export default function languageReducer(state: LanguageRecord = initialState, action: ChangeLocaleAction) {
  switch (action.type) {
    case actionTypes.CHANGE_LOCALE:
      return state.set('locale', action.payload || '');
    default:
      return state;
  }
}
