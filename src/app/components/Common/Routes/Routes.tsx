import * as React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

const NoMatch = React.lazy(() => import('../NoMatch/NoMatch'));
const UserPage = React.lazy(() => import('../../../containers/User/UserContainer'));

export const ROUTES = [
  {
    label: 'User',
    icon: 'user',
    pathname: '/',
    component: () => <UserPage />
  }
];

export const renderRoutes = routes =>
  routes.map(route => {
    if (route.children) {
      return renderRoutes(route.children);
    }
    return (
      <Route
        key={route.pathname}
        path={route.pathname}
        exact={true}
        component={route.component}
      />
    );
  });

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        {renderRoutes(ROUTES)}
        <Route
          key="User"
          path="/user"
          exact={true}
          component={() => <UserPage />}
        />
        <Route
          key="noMatch"
          component={() => <NoMatch />}
        />
      </Switch>
    );
  }
}

export default withRouter(Routes as any);
