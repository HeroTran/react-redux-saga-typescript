import * as React from 'react';
import { IntlProvider } from 'react-intl';

type LanguageProps = {
  locale: string;
  messages: {
    [key: string]: string;
  };
};

export default class Language extends React.PureComponent<LanguageProps & any, {}> {
  render() {
    return (
      <IntlProvider
        textComponent={React.Fragment}
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}
