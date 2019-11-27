import { Header } from '../../../components';
import { connect } from 'react-redux';
import { AppStateRecord } from '../../../functionals/types';
import { userLogoutSuccess } from '../../../functionals/LoginRegister/actions';

const mapStateToProps = (state: AppStateRecord) => ({
})

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(userLogoutSuccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);