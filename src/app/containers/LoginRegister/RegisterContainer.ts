import { connect } from 'react-redux';
import Register from '../../components/LoginRegister/Register';
import { makeSelectLoginState } from '../../functionals/LoginRegister/selectors';
import { push } from 'connected-react-router';

const mapStateToProps = () => ({
  isLogin: makeSelectLoginState()
});
const mapDispatchToProps = dispatch => ({
  changeToHome: () => dispatch(push('/user')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
