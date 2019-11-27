import * as React from 'react';
import { Form, Field, reduxForm } from 'redux-form/immutable';
import { FormattedMessage } from 'react-intl';
import { RenderField } from '../../components';
import { required, requiredSpace } from '../../utils/validator';
import { InjectedFormProps } from 'redux-form';
import messages from '../../functionals/LoginRegister/messages';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, Row } from 'reactstrap';
import './login.scss';
type LoginProps = {
  isLogin: boolean;
  handleSubmit: () => void;
  changeToHome: () => void;
};

type LoginStates = {}
type LoginType = LoginProps & InjectedFormProps;

class Login extends React.Component<LoginType, LoginStates> {
  constructor(props: LoginProps & InjectedFormProps) {
    super(props);
  }
  componentWillMount() {
    if (this.props.isLogin) {
      this.props.changeToHome();
    }
  }
  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.props.handleSubmit}>
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <h1><FormattedMessage {...messages.loginTitle} /></h1>
                        <p className="text-muted"><FormattedMessage {...messages.login} /></p>
                        <InputGroup className="mb-2">
                          <FormattedMessage {...messages.email}>
                            {(placeholder: string) => <Field name="email" component={RenderField} type="text" placeholder={placeholder} validate={[required, requiredSpace]} />}
                          </FormattedMessage>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <FormattedMessage {...messages.password}>
                            {(placeholder: string) => <Field name="password" component={RenderField} type="password" placeholder={placeholder} validate={[required, requiredSpace]} autoComplete="current-password" />}
                          </FormattedMessage>
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4"><FormattedMessage {...messages.loginTitle} /></Button>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                      <CardBody className="text-center">
                        <div>
                          <h2><FormattedMessage {...messages.signUp} /></h2>
                          <p><FormattedMessage {...messages.signUpInfo} /></p>
                          <Link to="/sign-up">
                            <Button className="mt-3 btn-sign" active tabIndex={-1}><FormattedMessage {...messages.signUpNow} /></Button>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </CardGroup>
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
  form: 'LoginForm',
})(Login);
