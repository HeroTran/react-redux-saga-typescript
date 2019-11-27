import * as React from 'react';
import { Location } from 'history';
import Routes from '../Common/Routes/Routes';
import SideBarContainer from '../../containers/Layout/SideBar/SideBarContainer';
import HeaderContainer from '../../containers/Layout/Header/HeaderContainer';
import './app.scss';

type AppState = {
}

type AppProps = {
  location: Location;
}
export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <SideBarContainer />
          <div className="page-container">
            <HeaderContainer />
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <React.Fragment>
                    <Routes />
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
