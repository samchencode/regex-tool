import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ListMatchesScreen from './ListMatchesScreen';
import ReplaceScreen from './ReplaceScreen';
import NotFoundScreen from './NotFoundScreen';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeScreen />
    </Route>
    <Route path="/list">
      <ListMatchesScreen />
    </Route>
    <Route path="/replace">
      <ReplaceScreen />
    </Route>
    <Route>
      <NotFoundScreen />
    </Route>
  </Switch>
);

export default Routes;
