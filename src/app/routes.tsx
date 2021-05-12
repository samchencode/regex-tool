import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardScreen from '../features/dashboard';
import NotFoundScreen from '../features/not-found';

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/match" />
    <Route path="/match" component={DashboardScreen} />
    <Route component={NotFoundScreen} />
  </Switch>
);

export default Routes;
