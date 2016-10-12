import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import game1 from './game1';
import game2 from './game2';

const socialApp = combineReducers({
  game1,
  game2,
  routing: routerReducer,
});

export default socialApp;
