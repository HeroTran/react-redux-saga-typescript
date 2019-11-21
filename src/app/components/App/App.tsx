import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Location } from 'history';
import Login from '../../containers/Login/LoginContainer';
import Permissions from '../../containers/Login/PermissionContainer';
import ForgotPassword from '../../containers/Login/ForgotPasswordContainer';
import ForgotPasswordSuccess from '../../containers/Login/ForgotPasswordSuccessContainer';
import ErrorContainer from '../../containers/Login/ErrorContainer';
import AuthorizeCode from '../../components/Login/AuthorizeCode';
import './app.scss';

type AppState = {
}

type AppProps = {
  location: Location;
}
export default class App extends React.Component<AppProps, AppState> {
  renderRedirectURL = () => {

  }
  render() {
    return (
      <div className="wrapper">
        <div className="main-content container">
          <div className="content">
            <Switch>
              <Route exact path="/uaa/login" component={Login} />
              <Route path="/uaa/oauth/authorize" component={Permissions} />
              <Route path="/uaa/code" component={AuthorizeCode} />
              <Route path="/uaa/error" component={ErrorContainer} />
              <Route path="/uaa/forgotpass" component={ForgotPassword} />
              <Route path="/uaa/forgotsuccess" component={ForgotPasswordSuccess} />
              <Redirect from="/" to="/uaa/login" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
