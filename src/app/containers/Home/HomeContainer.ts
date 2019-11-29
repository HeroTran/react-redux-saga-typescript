import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import { AppStateRecord } from '../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);