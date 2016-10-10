import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Game1 from './Game1';
import Game2 from './Game2';

import { test } from '../actions';

class GameList extends React.Component {

  render() {
    return (
      <div>
        <h1>Karaoke Night</h1>
        <ul>
          <li><Link to='/game/1'>Game 1</Link></li>
          <li><Link to='/game/2'>Game 2</Link></li>
        </ul>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      state,
    };
  },
  {
    test,
  }
)(GameList);
