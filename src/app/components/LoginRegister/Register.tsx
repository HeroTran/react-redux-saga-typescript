import * as React from 'react';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import { RenderField } from '../../components';
import {
  required,
  requiredSpace,
  email,
  minLength8,
  password
} from '../../utils/validator';
import { InjectedFormProps } from 'redux-form';
import messages from '../../functionals/LoginRegister/messages';
import { Button, Card, CardBody, Col, Container, InputGroup, Row } from 'reactstrap';

type RegisterProps = {
  checkPasswordMatch: () => void;
  isLogin: boolean;
  handleSubmit: () => void;
  changeToHome: () => void;
};

type RegisterStates = {}

class Register extends React.Component<RegisterProps & InjectedFormProps, RegisterStates> {
  constructor(props: RegisterProps & InjectedFormProps) {
    super(props);
  }
  componentWillMount() {
    if (this.props.isLogin) {
      this.props.changeToHome();
    }
  }
  render() {
    const { checkPasswordMatch } = this.props;
    return (
      <React.Fragment>
        <Form>
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <Form>
                        <h1>Register</h1>
                        <p className="text-muted">Create your account</p>
                        <InputGroup className="mb-3">
                          <FormattedMessage {...messages.userName}>
                            {(placeholder: string) => <Field name="userName" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace]} />}
                          </FormattedMessage>
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormattedMessage {...messages.email}>
                            {(placeholder: string) => <Field name="email" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace, email]} />}
                          </FormattedMessage>
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormattedMessage {...messages.password}>
                            {(placeholder: string) => <Field name="password" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace, minLength8, password]} autoComplete="current-password" />}
                          </FormattedMessage>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <FormattedMessage {...messages.repeatPassword}>
                            {(placeholder: string) => <Field name="repeatPassword" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace, minLength8, checkPasswordMatch]} autoComplete="new-password" />}
                          </FormattedMessage>
                        </InputGroup>
                        <Button color="success" block>Create Account</Button>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Form>
      </React.Fragment>

    );
  }
}

export default reduxForm({
  form: 'RegisterForm',
})(Register);
