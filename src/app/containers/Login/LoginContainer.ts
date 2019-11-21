import { connect } from 'react-redux';
// import { push } from 'connected-react-router';
// import { checkLoginStatus } from '../../functionals/Login/actions';
import Login from '../../components/Login/Login';
// import { FORGOT_PASSWORD } from '../../functionals/Login/constants';

const mapDispatchToProps = dispatch => ({
  // changeToForgotPass: () => dispatch(push(FORGOT_PASSWORD)),
  // checkLoginStatus: () => dispatch(checkLoginStatus())
});

export default connect(undefined, mapDispatchToProps)(Login);