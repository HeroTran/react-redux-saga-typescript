import { combineReducers } from 'redux-immutable';
import { language } from '../functionals/Language';
import { user } from '../functionals/User';
import { authUser } from '../functionals/LoginRegister';
import { reducer as form } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { History } from 'history'

export const rootReducer = (history: History) => combineReducers({
  language,
  user,
  form,
  authUser,
  router: connectRouter(history)
});
