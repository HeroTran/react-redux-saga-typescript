import * as React from 'react';
import LocaleSelectContainer from '../../../../containers/Language/LocaleSelectContainer';
import './header.scss';
const avarta = require('../../../../../public/images/man.jpg');
type HeaderProps = {
  handleLogout: () => void;
};

export default class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }
  handleLogout = () => {
    this.props.handleLogout();
  }
  render() {
    return (
      <React.Fragment>
        {/* HEADER DESKTOP*/}
        <header className="header-desktop">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="header-wrap">
                <div className="header-button">
                  <div className="noti-wrap">
                    <div className="noti__item js-item-menu">
                      <LocaleSelectContainer />
                    </div>
                    <div className="noti__item js-item-menu log-out">
                      <div onClick={this.handleLogout} className="btn-logout"><i /></div>
                    </div>
                  </div>
                  <div className="account-wrap">
                    <div className="account-item clearfix js-item-menu">
                      <div className="image">
                        <img src={avarta} alt="Bill" />
                      </div>
                      <div className="content">userName</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* HEADER DESKTOP*/}
      </React.Fragment>
    );
  }
}
