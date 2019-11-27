import * as React from 'react';

type userProps = {
}
type userStates = {}
class User extends React.Component<userProps, userStates> {
  constructor(props: userProps) {
    super(props);
  }
  render() {
    console.log('aaa', this.props);
    return (
      <React.Fragment>
        <div>
          lalalal
        </div>
      </React.Fragment>
    );
  }
}

export default User;