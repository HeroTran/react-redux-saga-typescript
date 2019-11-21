import { combineReducers } from 'redux-immutable';
import { language } from '../functionals/Language';
import { user } from '../functionals/Login';
import { reducer as form } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { History } from 'history'

export const rootReducer = (history: History) => combineReducers({
  language,
  user,
  form,
  router: connectRouter(history)
});
