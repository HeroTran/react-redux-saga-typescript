import * as React from 'react';
import { IntlProvider } from 'react-intl';

type LanguageProps = {
  locale?: string;
  messages: {
    [key: string]: string;
  };
};
type ChildrenProps = {
  children?: React.ReactNode
}

type LanguageType = LanguageProps & ChildrenProps;

export default class Language extends React.PureComponent<LanguageType, {}> {
  render() {
    return (
      <IntlProvider
        textComponent={React.Fragment}
        locale={this.props.locale}
        key={this.props.locale}
        messages={this.props.messages[this.props.locale ? this.props.locale : 0]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}
