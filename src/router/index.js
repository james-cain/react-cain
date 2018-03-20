import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home91 from '@/pages/home/home91';
const center = asyncComponent(() => import("@/pages/center/center"));
const applyCreditCard = asyncComponent(() => import("@/pages/apply_credit_card/apply-credit-card"));

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home91} />
          <Route path="/center" component={center} />
          <Route path="/applyCreditCard" component={applyCreditCard} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
