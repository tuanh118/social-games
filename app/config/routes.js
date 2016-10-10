import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import GameList from '../components/GameList';
import Game from '../components/Game';
import Round from '../components/Round';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={ Main }>
            <IndexRoute component={ GameList }/>
            <Route path='/game/:game' component={Game}/>
            <Route path='/game/:game/round/:round' component={Round}/>
        </Route>
    </Router>
);

module.exports = routes;
