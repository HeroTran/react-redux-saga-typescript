import { connect } from 'react-redux';
import { SpinnerLoading } from '../../../components';
import { AppStateRecord } from '../../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => ({
  isLoading: true
});

export default connect(mapStateToProps, undefined)(SpinnerLoading);
