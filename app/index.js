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

// Include redux dev tools
const createStoreWithDevTool = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithDevTool(socialApp);

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
