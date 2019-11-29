import * as React from 'react';
import { connect } from 'react-redux';
import { makeSelectLoginState } from '../../../functionals/LoginRegister/selectors';
import { push, RouterAction } from 'connected-react-router';
import { API_URL, AUTHORIZE_CODE } from '../../../functionals/LoginRegister/constants';
import { checkLoginStatus } from '../../../functionals/LoginRegister/actions';
import * as localStorage from '../../../utils/localStorage';

export default (AuthComponent: any) => {
  type AuthenticatedProps = {
    isLoggedIn: boolean;
    authName: string;
    redirectToLogin: () => RouterAction;
    redirectToHome: () => RouterAction;
    checkLoginStatus: (code: string) => void;
  }
  class Authenticated extends React.Component<AuthenticatedProps, {}> {
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        let authorizeCode = localStorage.getLocalStore(AUTHORIZE_CODE);
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('codeLogin');
        authorizeCode = code ? code : authorizeCode;
        if (authorizeCode) {
          const errorCode = urlParams.get('error_code');
          if (errorCode) {
            this.props.redirectToLogin();
          }
          this.props.checkLoginStatus(authorizeCode);
        } else {
          this.props.redirectToLogin();
        }
      } else {
        this.props.redirectToHome();
      }
    }
    render() {
      if (!this.props.isLoggedIn) {
        return null;
      }
      return (<AuthComponent {...this.props} />);
    }
  }
  const mapStateToProps = () => ({
    isLoggedIn: makeSelectLoginState()
  });
  const mapDispatchToProps = (dispatch) => ({
    redirectToLogin: () => dispatch(push(API_URL.URL_LOGIN)),
    redirectToHome: () => dispatch(push('/')),
    checkLoginStatus: (code: string) => dispatch(checkLoginStatus(code))
  })
  return connect(mapStateToProps, mapDispatchToProps)(Authenticated);
}