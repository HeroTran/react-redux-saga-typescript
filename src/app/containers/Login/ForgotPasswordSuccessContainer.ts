import { connect } from 'react-redux';
import ForgotPasswordSuccess from '../../components/Login/ForgotPasswordSuccess';
import { push } from 'connected-react-router';
import { API_URL } from '../../functionals/Login/constants';
import { AppStateRecord } from '../../functionals/types';
import { makeSelectForgotEmail } from '../../functionals/Login/selectors';

const mapStateToProps = (state: AppStateRecord) => ({
  email: makeSelectForgotEmail(state)
})

const mapDispatchToProps = dispatch => ({
  redirectToLogin: () => dispatch(push(API_URL.API_LOGIN))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordSuccess);