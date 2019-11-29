import * as React from 'react';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { RenderField } from '../../components';
import { required, requiredSpace, email } from '../../utils/validator';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/LoginRegister/messages';
import * as helper from '../../utils/helper';
import { Link } from 'react-router-dom';
import './login.scss';
type LoginProps = {
  isLogin: boolean;
  handleSubmit: () => void;
  changeToHome: () => void;
};

type LoginStates = {}
type LoginType = LoginProps & InjectedFormProps;

class Login extends React.Component<LoginType, LoginStates> {
  constructor(props: LoginProps & InjectedFormProps) {
    super(props);
  }
  componentWillMount() {
    if (this.props.isLogin) {
      this.props.changeToHome();
    }
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.props.handleSubmit}>
          <div className="page-wrapper">
            <div className="page-content--bge5">
              <div className="container">
                <div className="login-wrap">
                  <div className="login-content">
                    <div className="login-logo">
                      <h1>Login</h1>
                    </div>
                    <div className="login-form">
                      <div className="form-group m-b-10">
                        <label>Email Address</label>
                        <FormattedMessage {...messages.email}>
                          {(placeholder: string) => <Field name="email" component={RenderField} type="text" placeholder={placeholder} validate={[required, requiredSpace, email]} autoComplete="email" />}
                        </FormattedMessage>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <FormattedMessage {...messages.password}>
                          {(placeholder: string) => <Field name="password" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace]} autoComplete="current-password" />}
                        </FormattedMessage>
                      </div>
                      <button className="au-btn au-btn--block au-btn--green m-t-30 m-b-20" type="submit">sign in</button>
                      <div className="social-login-content">
                        <div className="social-button">
                          <a href={helper.loginFB()} className="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</a>
                        </div>
                      </div>
                      <div className="register-link">
                        <p>
                          Already have account? <Link to="/sign-up">Sign Up Here</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(Login);
