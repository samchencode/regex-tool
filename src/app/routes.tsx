import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../features/dashboard';
import NotFound from '../features/not-found';

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/match" />
    <Route path="/match" component={Dashboard} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;