import * as React from 'react';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import { RenderField } from '../../components';
import { required, requiredSpace, email, minLength8, password } from '../../utils/validator';
import { InjectedFormProps } from 'redux-form';
import messages from '../../functionals/LoginRegister/messages';
import { Link } from 'react-router-dom';
import './login.scss';

type RegisterProps = {
  islogin: boolean;
  handleSubmit: () => void;
  changeToHome: () => void;
};

type RegisterStates = {}
type RegisterType = RegisterProps & InjectedFormProps;

class Register extends React.Component<RegisterType, RegisterStates> {
  constructor(props: RegisterType) {
    super(props);
  }
  componentWillMount() {
    if (this.props.islogin) {
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
                      <h1>Sign Up</h1>
                    </div>
                    <div className="login-form">
                      <div className="form-group">
                        <label>User name</label>
                        <FormattedMessage {...messages.userName}>
                          {(placeholder: string) => <Field name="name" component={RenderField} type="text" placeholder={placeholder} validate={[required, requiredSpace]} autoComplete="name" />}
                        </FormattedMessage>
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <FormattedMessage {...messages.email}>
                          {(placeholder: string) => <Field name="email" component={RenderField} type="text" placeholder={placeholder} validate={[required, requiredSpace, email]} autoComplete="email" />}
                        </FormattedMessage>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <FormattedMessage {...messages.password}>
                          {(placeholder: string) => <Field name="password" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace, minLength8, password]} autoComplete="current-password" />}
                        </FormattedMessage>
                      </div>
                      <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">Register</button>
                      <div className="register-link">
                        <p>
                          Already have account? <Link to="/login">Sign In Here</Link>
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
  form: 'registerForm',
})(Register);
