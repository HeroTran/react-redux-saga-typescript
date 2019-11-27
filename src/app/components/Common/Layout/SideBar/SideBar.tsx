import * as React from 'react';
import './sideBar.scss';
import { Link } from 'react-router-dom';

type SideBarProps = {
};

export default class SideBar extends React.Component<SideBarProps> {
  render() {
    return (
      <React.Fragment>
        {/* MENU SIDEBAR*/}
        <aside className="menu-sidebar d-none d-lg-block">
          <div className="logo">
            <h1>REACT</h1>
          </div>
          <div className="menu-sidebar__content js-scrollbar1">
            <nav className="navbar-sidebar">
              <ul className="list-unstyled navbar__list">
                <li>
                  <Link to={'/user'}><i className="fa fa-user" />User</Link>
                </li>
                <li>
                  <Link to={'/post'}><i className="fa fa-user" />Post</Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        {/* END MENU SIDEBAR*/}
      </React.Fragment>
    );
  }
}
