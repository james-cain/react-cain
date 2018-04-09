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
const upgrade = LoadableComponent(() => import("@/pages/center/upgrade"));
const upgradeConfirm = LoadableComponent(() => import("@/pages/center/upgrade-confirm"));
const upgradeRule = LoadableComponent(() => import("@/pages/center/upgrade-rule"));
const share = LoadableComponent(() => import("@/pages/center/share"));
const shareDesc = LoadableComponent(() => import("@/pages/center/shareDesc"));
const team = LoadableComponent(() => import("@/pages/center/team"));
const applyCreditCardGuide = LoadableComponent(() => import("@/pages/apply_credit_card/apply-credit-card-guide"));
const soon = LoadableComponent(() => import("@/pages/developing/soon"));

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
          <Route path="/upgrade" component={upgrade} />
          <Route path="/upgradeConfirm" component={upgradeConfirm} />
          <Route path="/upgradeRule" component={upgradeRule} />
          <Route path="/share" component={share} />
          <Route path="/shareDesc/:id" component={shareDesc} />
          <Route path="/team" component={team} />
          <Route path="/applyCreditCardGuide" component={applyCreditCardGuide} />
          <Route path="/soon" component={soon} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
