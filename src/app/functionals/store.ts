import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history'
import { logger } from '../middleware';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { AppState } from './types';
import * as Immutable from 'immutable'
import { rootSaga } from './rootSaga';
import { LanguageFactory } from './Language/types';
import { UserStateFactory } from './User/types';
import { HomeStateFactory } from './Home/types';
import { AuthStateFactory } from './LoginRegister/types';
// import * as Raven from 'raven-js';
import * as Sentry from '@sentry/browser'

const initImmutable = Immutable.Map();
const initial: AppState = {
  form: {},
  home: HomeStateFactory(),
  language: LanguageFactory(),
  user: UserStateFactory(),
  authUser: AuthStateFactory(),
  router: {}
}

const preloadedState = initImmutable.map(Immutable.fromJS(initial));
const actionSanitizer = (action: any) => {
  if (action.payload) {
    return {
      ...action,
    }
  }
  return action;
}

const stateSanitizer = (state: any) => {
  const parseState = state.toJS();
  if (parseState) {
    return Immutable.fromJS(parseState);
  }
  return state;
}
export const history = createBrowserHistory();
// Raven.config('https://7c97ef7f67784e57a3e9f553ed52d82a@o379675.ingest.sentry.io/5204805').install();
Sentry.init({ dsn: 'https://7c97ef7f67784e57a3e9f553ed52d82a@o379675.ingest.sentry.io/5204805' });
const sagaMiddleware = createSagaMiddleware({
  onError(err) {
    console.log('vao roi ne', err);
    Sentry.captureException(err)
  },
})
export default function configureStore(): Store<AppState> {
  // const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware, logger, routerMiddleware(history));
  if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = composeWithDevTools({ actionSanitizer, stateSanitizer });
    middleware = composeEnhancers(middleware);
  }

  const store = createStore(
    rootReducer(history) as any,
    preloadedState as any,
    middleware) as any;
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }
  sagaMiddleware.run(rootSaga);
  (window as any).store = store;
  return store;
}
