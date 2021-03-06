import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../functionals/LoginRegister/messages';
type userProps = {
}
type userStates = {}
class User extends React.Component<userProps, userStates> {
  constructor(props: userProps) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <FormattedMessage {...messages.userName} />
        </div>
      </React.Fragment>
    );
  }
}

export default User;