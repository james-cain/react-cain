import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';

import home91 from '@/pages/home/home91';

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home91} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}