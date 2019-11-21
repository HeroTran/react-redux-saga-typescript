import { connect } from 'react-redux';
import Permissions from '../../components/Login/Permissions';
// import { userAuthorize, getUser, getPublisher, checkAuthorizeStatus } from '../../functionals/Login/actions';
// import { Map } from 'immutable';
import { AppStateRecord } from '../../functionals/types';
import { makeSelectUserName, makeSelectUserEmail, makeSelectPublisherName } from '../../functionals/Login/selectors';

const mapStateToProps = (state: AppStateRecord) => ({
  username: makeSelectUserName(state),
  email: makeSelectUserEmail(state),
  publisherName: makeSelectPublisherName(state)
});

const mapDispatchToProps = dispatch => ({
  // onSubmit: (values: Map<string, string>) => dispatch(userAuthorize(values)),
  // getUser: () => dispatch(getUser()),
  // getPublisher: (clientID: string) => dispatch(getPublisher(clientID)),
  // checkAuthorize: (query: string) => dispatch(checkAuthorizeStatus(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);