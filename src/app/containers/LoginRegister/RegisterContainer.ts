import { connect } from 'react-redux';
import Register from '../../components/LoginRegister/Register';
import { makeSelectLoginState } from '../../functionals/LoginRegister/selectors';
import { push } from 'connected-react-router';
import { Map } from 'immutable';
import { userRegisterRequest } from '../../functionals/LoginRegister/actions';

const mapStateToProps = () => ({
  isLogin: makeSelectLoginState()
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (values: Map<string, string>) => dispatch(userRegisterRequest(values)),
  changeToHome: () => dispatch(push('/user')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
