import { makeSelectLocale } from '../../functionals/Language/selectors';
import { connect } from 'react-redux';
import Language from '../../components/Common/Language/Language';
import { AppStateRecord } from '../../functionals/types';

const mapStateToProps = (state: AppStateRecord) => {
  return {
    locale: makeSelectLocale(state),
  }
}

export default connect(mapStateToProps, undefined)(Language);
