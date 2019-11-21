import { connect } from 'react-redux';
import ForgotPassword from '../../components/Login/ForgotPassword';
// import { sendEmailForgotPassword } from '../../functionals/Login/actions';
// import { push } from 'connected-react-router';
// import { API_URL } from '../../functionals/Login/constants';
// import { Map } from 'immutable';

const mapDispatchToProps = dispatch => ({
  // redirectToLogin: () => dispatch(push(API_URL.API_LOGIN)),
  // onSubmit: (values: Map<string, string>) => dispatch(sendEmailForgotPassword(values)),
});

export default connect(undefined, mapDispatchToProps)(ForgotPassword);