import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import './login.scss';
type LoginProps = {
}

type LoginState = {
}
type LoginTypes = LoginProps & InjectedFormProps;

export default class Login extends React.Component<LoginTypes, LoginState> {
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
      </React.Fragment>

    );
  }
}