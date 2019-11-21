import { actionTypes, ChangeLocaleAction } from './actionTypes';

export function changeLocale(languageLocale: string): ChangeLocaleAction {
  return {
    type: actionTypes.CHANGE_LOCALE,
    payload: languageLocale,
  };
}
