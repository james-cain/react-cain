import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Route from './router';
import store from './store/store';
import WeApi from './utils/wechat';
// import registerServiceWorker from './registerServiceWorker';
import './utils/setRem';
import './style/base.css';
import "./assets/iconfonts/iconfont.css";

FastClick.attach(document.body);

WeApi.getSignatrue({
  headers: {
    'content-type': 'application/json'
  },
  data: {
    url: 'http://b.posfz.com/index.html'
  }
});

/* eslint no-undef: 0 */
wx.ready(function () {
//   wx.checkJsApi({
//     jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
//     success: function(res) {
//       // 以键值对的形式返回，可用的api值true，不可用为false
//       // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
//       console.log(res);
//     }
//   });
    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: '91卡哥-朋友', // 分享标题
      desc: '91卡哥分享-朋友', // 分享描述
      link: 'http://b.posfz.com/login?id=1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
      // 用户确认分享后执行的回调函数
        alert('shared success');
      },
      cancel: function () {
      // 用户取消分享后执行的回调函数
        alert('shared failed');
      }
    });

});

// 分享朋友圈
wx.onMenuShareTimeline({
  title: '91卡哥-朋友圈', // 分享标题
  link: 'http://b.posfz.com/login?id=1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: '', // 分享图标
  success: function () {
    // 用户确认分享后执行的回调函数
  },
  cancel: function () {
    // 用户取消分享后执行的回调函数
  }
});

// 分享给朋友
wx.onMenuShareAppMessage({
  title: '91卡哥-朋友', // 分享标题
  desc: '91卡哥分享-朋友', // 分享描述
  link: 'http://b.posfz.com/login?id=1', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: '', // 分享图标
  type: '', // 分享类型,music、video或link，不填默认为link
  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
  success: function () {
  // 用户确认分享后执行的回调函数
    alert('shared success');
  },
  cancel: function () {
  // 用户取消分享后执行的回调函数
    alert('shared failed');
  }
});
// 分享给QQ
wx.onMenuShareQQ({
  title: '91卡哥-QQ', // 分享标题
  desc: '91卡哥分享-QQ', // 分享描述
  link: 'http://b.posfz.com/login?id=1', // 分享链接
  imgUrl: '', // 分享图标
  success: function () {
  // 用户确认分享后执行的回调函数
  },
  cancel: function () {
  // 用户取消分享后执行的回调函数
  }
});
// 分享到QQ空间
wx.onMenuShareQZone({
  title: '91卡哥-空间', // 分享标题
  desc: '91卡哥分享-空间', // 分享描述
  link: 'http://b.posfz.com/login?id=1', // 分享链接
  imgUrl: '', // 分享图标
  success: function () {
  // 用户确认分享后执行的回调函数
  },
  cancel: function () {
  // 用户取消分享后执行的回调函数
  }
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
//registerServiceWorker();
