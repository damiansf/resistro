import React from 'react';
import ReactDOM	from 'react-dom';

import { Provider } from 'react-redux';
import store from './js/store';

import App from './js/page/app';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
