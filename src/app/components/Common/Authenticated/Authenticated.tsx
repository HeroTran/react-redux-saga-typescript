import * as React from 'react';
import { connect } from 'react-redux';
import { makeSelectLoginState } from '../../../functionals/LoginRegister/selectors';
import { push, RouterAction } from 'connected-react-router';
import { API_URL } from '../../../functionals/LoginRegister/constants';

export default (AuthComponent: any) => {
  type AuthenticatedProps = {
    isLoggedIn: boolean;
    redirectToLogin: () => RouterAction;
  }
  class Authenticated extends React.Component<AuthenticatedProps, {}> {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.redirectToLogin();
      }
    }
    render () {
      return (<AuthComponent {...this.props} />);
    }
  }
  const mapStateToProps = () => ({
    isLoggedIn: makeSelectLoginState()
  });
  const mapDispatchToProps = (dispatch) => ({
    redirectToLogin: () => dispatch(push(API_URL.URL_LOGIN))
  })
  return connect(mapStateToProps, mapDispatchToProps)(Authenticated);
}