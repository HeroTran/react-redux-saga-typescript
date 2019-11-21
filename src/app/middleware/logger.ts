import { Middleware } from 'redux';

export const logger: Middleware = () => next => (action) => {
  if (process.env.NODE_ENV !== 'production') {
  }
  return next(action);
};
