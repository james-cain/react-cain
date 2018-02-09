import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { Provide } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Router from './router';
import store from './store/store';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

FastClick.attach(document.body);

const render = Component => {
  ReactDom.render()
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
