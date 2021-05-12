import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ListMatchesScreen from './ListMatchesScreen';
import ReplaceScreen from './ReplaceScreen';

const Routes = () => (
  <Switch>
    <Route exact path="/match/" component={HomeScreen} />
    <Route path="/match/list" component={ListMatchesScreen} />
    <Route path="/match/replace" component={ReplaceScreen} />
  </Switch>
);

export default Routes;
