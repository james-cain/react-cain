import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
// import asyncComponent from '@/utils/asyncComponent';
import LoadableComponent from '@/utils/loadableComponent';

import home91 from '@/pages/home/home91';
const center = LoadableComponent(() => import("@/pages/center/center"));
const applyCreditCard = LoadableComponent(() => import("@/pages/apply_credit_card/apply-credit-card"));
const applyCreditCardDesc = LoadableComponent(() => import("@/pages/apply_credit_card/apply-credit-card-desc"));
const applyCreditCardSubmit = LoadableComponent(() => import("@/pages/apply_credit_card/apply-credit-card-submit"));
const exclusiveService = LoadableComponent(() => import("@/pages/center/exclusive-service"));
const personInfo = LoadableComponent(() => import("@/pages/center/personInfo"));
const SettlementCard = LoadableComponent(() => import("@/pages/center/settlement-card"));
const orderManage = LoadableComponent(() => import("@/pages/center/order-manage"));
const Notice = LoadableComponent(() => import("@/pages/notice/notice"));

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home91} />
          <Route path="/center" component={center} />
          <Route path="/applyCreditCard" component={applyCreditCard} />
          <Route path="/applyCreditCardDesc/:id" component={applyCreditCardDesc} />
          <Route path="/applyCreditCardSubmit/:id" component={applyCreditCardSubmit} />
          <Route path="/exclusiveService" component={exclusiveService} />
          <Route path="/personInfo" component={personInfo} />
          <Route path="/SettlementCard" component={SettlementCard} />
          <Route path="/orderManage" component={orderManage} />
          <Route path="/notice" component={Notice} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
