import React from 'react';
import { Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import Overview from './components/overview/index';
import Projection from './components/projection/index';
import PayStructures from './components/pay-structures/index';
import Auth from './components/auth/index';

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} exact render={props => (
        auth.isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            window.location.pathname = '/identity/main/login'
        )
    )}/>
)

export const makeMainRoutes = () => {
  return (
      <HashRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Overview}/>
          <PrivateRoute path="/projection" component={Projection}/>
          <PrivateRoute path="/pay-structures" component={PayStructures}/>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
  );
}
