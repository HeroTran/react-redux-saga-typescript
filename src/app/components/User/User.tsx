import * as React from 'react';
import { InjectedFormProps } from 'redux-form';
import './user.scss';
type UserProps = {
  getAllUser: () => void;
}

type UserState = {
}
type UserTypes = UserProps & InjectedFormProps;

export default class User extends React.Component<UserTypes, UserState> {
  constructor(props: UserTypes) {
    super(props);
  }
  componentDidMount(){
    this.props.getAllUser();
  }
  render() {
    return (
      <React.Fragment>
        <div className="user-page content-page">
          List user
        </div>
      </React.Fragment>

    );
  }
}