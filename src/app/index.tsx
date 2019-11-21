import * as React from 'react';
import { History } from 'history'
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable'
import AppContainer from './containers/App/AppContainer';

interface AppProps {
  history: History;
}

const App = ({ history }: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/home" component={AppContainer} />
          <Route path="/" component={AppContainer} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}
export default App