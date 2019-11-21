const { DEFAULT_LOCALE } = require('../../i18n');
import { Record } from 'immutable';

const languageStateDefault: State.Language = {
  locale: DEFAULT_LOCALE,
  messages: ''
}

export type LanguageRecord = Record<State.Language>;
export const LanguageFactory = Record(languageStateDefault);