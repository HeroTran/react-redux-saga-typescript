import { connect } from 'react-redux';
import User from '../../components/User/User';
import { getAllUser } from '../../functionals/User/actions';

const mapDispatchToProps = dispatch => ({
  getAllUser: () => dispatch(getAllUser()),
});

export default connect(undefined, mapDispatchToProps)(User);