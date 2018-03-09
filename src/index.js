import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provide } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Route from './router';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './utils/setRem';
import './style/base.css';

FastClick.attach(document.body);

const render = Component => {
  ReactDOM.render(
    // 绑定redux、热加载
    <Provide store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provide>,
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
