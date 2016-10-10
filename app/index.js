import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import socialApp from './reducers';
import routes from './config/routes';

const initialState = {
  sentences: [
    'Lung linh bao anh sang',
    'Huong thom noi ta da hen',
    'Tinh se chap canh bay xa',
  ],
};

const createStoreWithDevTool = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithDevTool(socialApp, initialState);


ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
