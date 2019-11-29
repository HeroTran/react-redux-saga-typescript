import { connect } from 'react-redux';
import Register from '../../components/LoginRegister/Register';
import { makeSelectLoginState, makeErrorRegisterUser } from '../../functionals/LoginRegister/selectors';
import { push } from 'connected-react-router';
import { Map } from 'immutable';
import { userRegisterRequest } from '../../functionals/LoginRegister/actions';
import { AppStateRecord } from '../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => ({
  isLogin: makeSelectLoginState(),
  errorMessage: makeErrorRegisterUser(state)
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (values: Map<string, string>) => dispatch(userRegisterRequest(values)),
  changeToHome: () => dispatch(push('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
