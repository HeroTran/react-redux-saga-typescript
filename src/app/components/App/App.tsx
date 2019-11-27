import * as React from 'react';
import { Location } from 'history';
import Routes from '../Common/Routes/Routes';
import './app.scss';

type AppState = {
}

type AppProps = {
  location: Location;
}
export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="wrapper">
        <div className="main-content container">
          <div className="content">
            <React.Fragment>
              <Routes />
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}
