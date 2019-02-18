import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NormalState from './NormalState';
import UseStateHook from './UseStateHook';
import NormalLifecycle from './NormalLifecycle';
import UseEffectHook from './UseEffectHook'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={NormalState} />
      <Route exact path="/usestate-hook" component={UseStateHook} />
      <Route exact path="/normal-lifecyle" component={NormalLifecycle} />
      <Route exact path="/useeffect-hook" component={UseEffectHook} />
    </Switch>
  </BrowserRouter>
);

export default Router;