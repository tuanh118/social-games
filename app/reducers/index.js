import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import general from './general';
import game1 from './game1';
import game2 from './game2';

const socialApp = combineReducers({
  general,
  game1,
  game2,
  routing: routerReducer,
});

export default socialApp;
