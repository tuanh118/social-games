import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { fromJS } from 'immutable';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Main from './containers/Main';
import Event from './components/Event';
import Game from './components/Game';
import Round from './components/Round';

import socialApp from './reducers';

const sentences = [
  // 'Lung linh bao anh sang',
  // 'Huong thom noi ta da hen',
  // 'Tinh se chap canh bay xa',
  'This is a fight song  ',
  'Get back my life song',
  'Prove I\'m all right song ohoh',
];

const hidden = sentences.map(
  sentence => sentence.trim().split(' ').map(word => true)
);

const game1 = fromJS({
  sentences,
  hidden,
});

const initialState = {
  game1,
};

// Include redux dev tools
const createStoreWithDevTool = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithDevTool(
  socialApp,
  initialState,
);

export const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={Event}/>
        <Route path='/game/:game' component={Game}/>
        <Route path='/game/:game/round/:round' component={Round}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
