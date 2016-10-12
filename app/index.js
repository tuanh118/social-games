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

const songs = [
  {
    title: 'Mat tri nho',
    imgUrl: 'http://image.mp3.zdn.vn/covers/a/6/a6e46053ef8f167b07ea577c68c4c977_1351653104.jpg',
  },
  {
    title: 'Ba ke con nghe',
    imgUrl: 'https://i.ytimg.com/vi/Z8MbZW91jWg/hqdefault.jpg',
  },
  {
    title: 'Make you feel my love',
    imgUrl: 'http://orig12.deviantart.net/42f2/f/2011/244/3/4/to_make_you_feel_my_love_by_3_al5ater-d48i35v.jpg',
  },
  {
    title: 'Fix you',
    imgUrl: 'http://lookingforlukah.us/wp-content/uploads/2016/03/Fix-you-2.png',
  },
  {
    title: 'Somewhere only we know',
    imgUrl: 'https://tipsytirade.files.wordpress.com/2015/10/il_570xn-419793334_f48r.jpg',
  },
  {
    title: 'Heart skips a beat',
    imgUrl: '',
  },
];

const guessed = songs.map(
  song => false
);

const game2 = fromJS({
  songs,
  guessed,
});

const initialState = {
  game1,
  game2,
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
