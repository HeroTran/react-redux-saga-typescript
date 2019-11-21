import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/Login/messages';
import { DEFAULT_NEWZIK_WEBSITE, API_URL, ErrorURLComponent, LoginFailedError } from '../../functionals/Login/constants';

export default class Error extends React.Component<{}, {}> {
  handleTryAgain = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const retryURL = urlParams.get(ErrorURLComponent.RETRY_URL);
    if (retryURL) {
      const META_API = process.env.REACT_APP_API_URL;
      const logoutURL = `${META_API}${API_URL.API_LOGOUT}?target_url=${encodeURIComponent(retryURL)}`;
      window.location.assign(logoutURL);
    }
  }
  handleCancel = () => {
    const META_API = process.env.REACT_APP_API_URL;
    const logoutURL = `${META_API}${API_URL.API_LOGOUT}?target_url=${encodeURIComponent(DEFAULT_NEWZIK_WEBSITE)}`;
    window.location.assign(logoutURL);
  }
  render() {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get(ErrorURLComponent.ERROR);
    return (
      <div className="error-page content-page">
        <div className="error-content wrapper-content">
          <div className="header">
            <span className="logo" />
          </div>
          <span className="icon" />
          <p>{error === LoginFailedError.INVALID_SCOPE ? <FormattedMessage {...messages.invalidScopeError} /> : <FormattedMessage {...messages.unknownError} />}</p>
          <div className="group-btn-error">
            <button className="btn btn-app" type="button" onClick={this.handleTryAgain} ><FormattedMessage {...messages.btnRetry} /></button>
            <button className="btn btn-app btn-cancel" type="button" onClick={this.handleCancel}><i /><FormattedMessage {...messages.btnCancel} /></button>
          </div>
        </div>
      </div>
    );
  }
}
