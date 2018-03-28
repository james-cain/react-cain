import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home91 from '@/pages/home/home91';
const center = asyncComponent(() => import("@/pages/center/center"));
const applyCreditCard = asyncComponent(() => import("@/pages/apply_credit_card/apply-credit-card"));
const applyCreditCardDesc = asyncComponent(() => import("@/pages/apply_credit_card/apply-credit-card-desc"));
const applyCreditCardSubmit = asyncComponent(() => import("@/pages/apply_credit_card/apply-credit-card-submit"));
const exclusiveService = asyncComponent(() => import("@/pages/center/exclusive-service"));
const personInfo = asyncComponent(() => import("@/pages/center/personInfo"));
const SettlementCard = asyncComponent(() => import("@/pages/center/settlement-card"));
const orderManage = asyncComponent(() => import("@/pages/center/order-manage"));
const Notice = asyncComponent(() => import("@/pages/notice/notice"));

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
