import { connect } from 'react-redux';
import User from '../../components/User/User';
import { getAllUser } from '../../functionals/User/actions';
import { makeSelectUserList  } from '../../functionals/User/selectors';
import { AppStateRecord } from '../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => ({
  users: makeSelectUserList(state),
});

const mapDispatchToProps = dispatch => ({
  getAllUser: () => dispatch(getAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);