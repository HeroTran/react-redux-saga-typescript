import * as React from 'react';

export default class AuthorizeCode extends React.Component<{}, {}> {
  componentDidMount() {
    const url = new URL(window.location.protocol + window.location.host + window.location.pathname + window.location.search);
    const redirectUri = url.searchParams.get('redirect_uri');
    if (redirectUri) {
      window.location.assign(redirectUri);
    }
  }
  render() {
    return (
      <div />
    );
  }
}
