import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ListMatchesScreen from './ListMatchesScreen';
import ReplaceScreen from './ReplaceScreen';

const Routes = () => (
  <Switch>
    <Route exact path="/match/">
      <HomeScreen />
    </Route>
    <Route path="/match/list">
      <ListMatchesScreen />
    </Route>
    <Route path="/match/replace">
      <ReplaceScreen />
    </Route>
  </Switch>
);

export default Routes;
