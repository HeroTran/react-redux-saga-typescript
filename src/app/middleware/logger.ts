import { Middleware } from 'redux';
import * as Raven from 'raven-js';

export const logger: Middleware = store => next => action => {
  const result = next(action);
  if (process.env.NODE_ENV !== 'production') {
    // console.log('dispatching', action.type);
    // console.log('next state', store.getState())
  }
  return result;
};

export const crashReporter: Middleware = store => next => action => {
  try {
    console.log('crashReporter success');
    return next(action);
  } catch (err) {
    console.error('Need to config for production Caught an exception!', err);
    const state = store.getState();
    const extra = { action, state }
    console.log('extra', extra)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}