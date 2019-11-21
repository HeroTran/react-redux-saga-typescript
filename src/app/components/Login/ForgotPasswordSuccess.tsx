import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/Login/messages';
import { RouterAction } from 'connected-react-router';
import './login.scss';

type ForgotPasswordProps = {
  email: string;
  redirectToLogin: () => RouterAction;
}

type ForgotPasswordSuccessState = {
}

export default class ForgotPasswordSuccess extends React.Component<ForgotPasswordProps, ForgotPasswordSuccessState> {
  render() {
    return (
      <div className="forgotPasswordSuccess-page content-page">
        <div className="forgotPasswordSuccess-content wrapper-content">
          <div className="header">
            <span className="logo" />
          </div>
          <span className="icon" />
          <h2><FormattedMessage {...messages.successtitle} /></h2>
          <p className="content"><FormattedMessage {...messages.successContent} values={{ property: this.props.email }} /></p>
          <button onClick={this.props.redirectToLogin} className="btn btn-app" type="button"><FormattedMessage {...messages.btnBackLogin} /></button>
        </div>
      </div>
    );
  }
}