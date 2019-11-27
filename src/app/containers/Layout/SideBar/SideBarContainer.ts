import { SideBar } from '../../../components';
import { connect } from 'react-redux';
import { AppStateRecord } from '../../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);