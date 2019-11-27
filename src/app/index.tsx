import * as React from 'react';
import { History } from 'history'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Authenticated, SpinnerLoading } from './components';
const LoginContainer = React.lazy(() => import('./containers/LoginRegister/LoginContainer'));
const RegisterContainer = React.lazy(() => import('./containers/LoginRegister/RegisterContainer'));
const AppContainer = React.lazy(() => import('./containers/App/AppContainer'));

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <React.Suspense fallback={<SpinnerLoading isLoading={true} />}>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/sign-up" component={RegisterContainer} />
          <Route path="/" component={Authenticated(AppContainer)} />
        </Switch>
      </React.Suspense>
    </ConnectedRouter>
  )
}
export default App;