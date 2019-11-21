import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Location } from 'history';
import User from '../../containers/User/UserContainer';
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
              <Route exact path="/user" component={User} />
              <Redirect from="/" to="/user" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
