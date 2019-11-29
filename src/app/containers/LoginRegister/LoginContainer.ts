import { connect } from 'react-redux';
import Login from '../../components/LoginRegister/Login';
import { makeSelectLoginState } from '../../functionals/LoginRegister/selectors';
import { userLoginRequest } from '../../functionals/LoginRegister/actions';
import { Map } from 'immutable';
import { push } from 'connected-react-router';

const mapStateToProps = () => ({
  isLogin: makeSelectLoginState()
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (values: Map<string, string>) => dispatch(userLoginRequest(values)),
  changeToHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);