import * as React from 'react';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import RenderField from '../Common/RenderField/RenderField';
import { required, requiredSpace, email } from '../../utils/validator';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/Login/messages';
import './login.scss';
import { RouterAction } from 'connected-react-router';

type ForgotPasswordProps = {
  handleSubmit: () => void;
  redirectToLogin: () => RouterAction;
}

type ForgotPasswordState = {
}
type ForgotPasswordTypes = ForgotPasswordProps & InjectedFormProps;

class ForgotPassword extends React.Component<ForgotPasswordTypes, ForgotPasswordState> {
  render() {
    const { handleSubmit } = this.props;
    const isShowError = window.location.search.indexOf('error') !== -1;
    return (
      <div className="forgotPassword-page content-page">
        <div className="forgotPassword-content wrapper-content">
          <div className="header">
            <span className="logo" />
          </div>
          <h2><FormattedMessage {...messages.forgot} /></h2>
          <p className="content"><FormattedMessage {...messages.forgotContent} /></p>
          <Form onSubmit={handleSubmit}>
            <div className="wrapper-form-group">
              <div className="forgotPassword-form">
                <div className="form-group">
                  <FormattedMessage {...messages.email}>
                    {(placeholder: string) => <Field name="email" isCheckValidate={isShowError} component={RenderField} type="text" placeholder={placeholder} validate={[required, requiredSpace, email]} autoComplete="email" />}
                  </FormattedMessage>
                </div>
                {isShowError ? <div className="error-messages"><FormattedMessage {...messages.failureContent} /></div> : null}
                <p className="note"><FormattedMessage {...messages.forgotNote} /></p>
              </div>
              <div className="group-btn-forgotPassword">
                <button className="btn btn-app" type="submit"><FormattedMessage {...messages.btnReset} /></button>
                <button className="btn btn-app btn-cancel" type="button" onClick={this.props.redirectToLogin}><i /><FormattedMessage {...messages.btnCancel} /></button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ForgotPasswordForm',
})(ForgotPassword);