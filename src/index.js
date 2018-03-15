import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Route from './router';
import store from './store/store';
import WeApi from './utils/wechat';
import registerServiceWorker from './registerServiceWorker';
import './utils/setRem';
import './style/base.css';
import "./assets/iconfonts/iconfont.css";

FastClick.attach(document.body);

const weApiConfig = WeApi.getSignatrue({
  params: {
    url: 'http://b.posfz.com/index.html'
  }
});
/* eslint no-undef: 0 */
wx.config({
  debug: true,
  appId: weApiConfig.appId,
  timestamp: weApiConfig.timestamp,
  nonceStr: weApiConfig.nonceStr,
  signature: weApiConfig.signature,
  jsApiList: ['onMenuShareTimeline', 'checkJsApi']
});

wx.ready(function (e) {
  console.log(e);
  console.log('============');
  wx.checkJsApi({
    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      console.log(res);
    }
  });
});

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
