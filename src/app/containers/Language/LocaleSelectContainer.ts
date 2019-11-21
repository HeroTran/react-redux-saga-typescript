import { makeSelectLocale } from '../../functionals/Language/selectors';
import { changeLocale } from '../../functionals/Language/actions';
import { connect } from 'react-redux';
import LocaleSelect from '../../components/Common/LocaleSelect/LocaleSelect';
import { AppStateRecord } from '../../functionals/types';
import { Dispatch } from 'redux';
import { ChangeLocaleStates, ChangeLocaleActionType } from '../../functionals/Language/actionTypes';

const mapStateToProps = (state: AppStateRecord): ChangeLocaleStates => {
  return {
    locale: makeSelectLocale(state),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ChangeLocaleActionType>) => ({
  onLocaleChange: (locale: string) => dispatch(changeLocale(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSelect);
