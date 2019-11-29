import { Header } from '../../../components';
import { connect } from 'react-redux';
import { AppStateRecord } from '../../../functionals/types';
import { userLogoutSuccess, getUserInfo } from '../../../functionals/LoginRegister/actions';
import { makeSelectUserNameState } from '../../../functionals/LoginRegister/selectors';

const mapStateToProps = (state: AppStateRecord) => ({
  userName: makeSelectUserNameState(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(userLogoutSuccess()),
  getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);