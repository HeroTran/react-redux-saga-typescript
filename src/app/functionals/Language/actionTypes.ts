export const actionTypes = {
  CHANGE_LOCALE_REQUEST: 'CHANGE_LOCALE_REQUEST',
  CHANGE_LOCALE: 'CHANGE_LOCALE_LANGUGE',
};

export interface ChangeLocaleAction {
  type: typeof actionTypes.CHANGE_LOCALE;
  payload: string;
}

export type LanguageAction = ChangeLocaleAction;
export type ChangeLocaleStates = {
  locale: string;
}

export type ChangeLocaleActionType = ChangeLocaleAction;
export default actionTypes;