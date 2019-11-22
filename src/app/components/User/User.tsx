import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import './user.scss';
type UserProps = {
  users: any;
  getAllUser: () => void;
}

type UserState = {
}
type UserTypes = UserProps & InjectedFormProps;

export default class User extends React.Component<UserTypes, UserState> {
  constructor(props: UserTypes) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllUser();
  }
  createUserListElement = (): JSX.Element => {
    return (
      <div className="user-list-select">
          {this.props.users.map((user: any, index: number) => {
            return (
              <li key={index}>
                {user.name}
              </li>
            );
          })}
      </div>
    )
  }
  render() {
    console.log('List user', this.props.users);
    return (
      <React.Fragment>
        <div className="user-page content-page">
          {this.createUserListElement()}
        </div>
      </React.Fragment>

    );
  }
}