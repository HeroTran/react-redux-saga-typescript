import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './app/functionals/store';
import App from './app';
import LanguageContainer from './app/containers/Language/LanguageContainer';
const { translationMessages } = require('./app/i18n');
import './app/styles/style.scss';

const store = configureStore();
const render = (messages: {}) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageContainer messages={messages}>
        <App history={history} />
      </LanguageContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(['./app/i18n', './app/components/App/App'], () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root') as HTMLElement);
    render(translationMessages);
  });
}

declare global {
  interface Window { Intl: any; }
}

if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        require('intl/locale-data/jsonp/en.js'),
        require('intl/locale-data/jsonp/de.js'),
      ]),
  )
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
