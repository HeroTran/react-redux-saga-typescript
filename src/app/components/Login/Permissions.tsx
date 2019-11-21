import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/Login/messages';
import './login.scss';
import { InjectedFormProps } from 'redux-form';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { API_URL } from '../../functionals/Login/constants';
import { AppStateRecord } from '../../functionals/types';
import { AxiosResponse } from 'axios';

type PermissionsProps = {
  username: string;
  email: string;
  publisherName: string;
  handleSubmit: () => void;
  getUser: () => () => (dispatch: any, getState: () => AppStateRecord) => Promise<void>;
  getPublisher: (clientID: string) => (dispatch: any) => Promise<void>;
  checkAuthorize: (query: string) => Promise<AxiosResponse<any>>;
}

export class Permissions extends React.Component<PermissionsProps & InjectedFormProps, {}> {
  componentDidMount() {
    this.props.getUser();
    const urlParams = new URLSearchParams(window.location.search);
    const clientID = urlParams.get('client_id');
    if (clientID) {
      this.props.getPublisher(clientID);
    }
    this.props.checkAuthorize(window.location.search);
  }
  signOut = () => {
    const META_API = process.env.REACT_APP_API_URL;
    const targetURL = `${META_API}${window.location.pathname}${window.location.search}`;
    const logoutURL = `${META_API}${API_URL.API_LOGOUT}?target_url=${encodeURIComponent(targetURL)}`;
    window.location.assign(logoutURL);
  }
  handleAuthorize = () => {
    this.props.change('scope', 'true');
  }
  handleCancel = () => {
    this.props.change('scope', 'false');
  }
  render() {
    const name = this.props.username || this.props.email;
    return (
      <div className="permissions-page content-page">
        <div className="permissions-content wrapper-content">
          <div className="header">
            <span className="logo" />
          </div>
          <Form onSubmit={this.props.handleSubmit}>
            <h2><FormattedMessage {...messages.permissionstitle} values={{ property: this.props.publisherName }} /></h2>
            <div className="wrapper-box">
              <div className="each-box">
                <i />
                <p><FormattedMessage {...messages.contentAccess} /></p>
              </div>
              <div className="each-box">
                <i />
                <p><FormattedMessage {...messages.contentPossibility} /></p>
              </div>
            </div>
            <div className="form-group">
              <Field component="input" name="scope" type="hidden" />
            </div>
            <button className="btn btn-app btn-accept" type="submit" onClick={this.handleAuthorize}>
              <span className="lb-btn"><FormattedMessage {...messages.btnAccept} /></span>
              <span className="lb-name">{name}</span>
            </button>
            <button className="btn btn-app btn-cancel" type="submit" onClick={this.handleCancel}><FormattedMessage {...messages.btnCancel} /></button>
            <a className="confirm" onClick={this.signOut}><FormattedMessage {...messages.confirm} /></a>
          </Form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'AuthorizeForm'
})(Permissions);