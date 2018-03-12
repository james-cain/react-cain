import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Route from './router';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './utils/setRem';
import './style/base.css';
import "./assets/iconfonts/iconfont.css";

FastClick.attach(document.body);

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
