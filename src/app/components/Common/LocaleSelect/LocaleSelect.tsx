import * as React from 'react';
import { ChangeLocaleAction } from '../../../functionals/Language/actionTypes';

type LocaleSelectState = {
  locale: string;
  onLocaleChange: (val: string) => ChangeLocaleAction;
};

export default class LocaleSelect extends React.Component<LocaleSelectState> {
  handleChange = (evt: React.MouseEvent<HTMLLIElement>) => {
    let value = evt.currentTarget.parentElement && evt.currentTarget.parentElement.getAttribute('data-flag');
    if (value == null) {
      value = evt.currentTarget.getAttribute('data-flag');
    }
    this.props.onLocaleChange(value as string);
  }
  render() {
    return (
      <ul className="ul-flag">
        <li onClick={this.handleChange} data-flag="en">
          <i className="en" />
        </li>
        <li onClick={this.handleChange} data-flag="fr">
          <i className="fr" />
        </li>
      </ul>
    );
  }
}
