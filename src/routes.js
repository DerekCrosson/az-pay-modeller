import React from 'react';
import { Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import Overview from './components/overview/index';
import Projection from './components/projection/index';
import PayStructures from './components/pay-structures/index';
import Login from './components/login/index';
import Callback from './components/callback/callback';
import Auth from './components/auth/auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} exact render={props => (
        auth.isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

export const makeMainRoutes = () => {
  return (
      <BrowserRouter history={history} component={Overview}>
        <Switch>
          <Route path="/login" render={(props) => <Login auth={auth} {...props} />} />
          <PrivateRoute path="/" exact component={Overview}/>
          <PrivateRoute path="/projection" component={Projection}/>
          <PrivateRoute path="/pay-structures" component={PayStructures}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </Switch>
      </BrowserRouter>
  );
}
