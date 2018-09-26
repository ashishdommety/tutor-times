import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentation/App/App';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
// registerServiceWorker();
