import React, { Component } from 'react';

import Game1 from './Game1';
import Game2 from './Game2';

class Game extends Component {
  getGameContent(game) {
    switch (game) {
      case 1:
        return <Game1 />;
      case 2:
        return <Game2 />;
      default:
        return null;
    }
  }

  render() {
    const content = this.getGameContent(parseInt(this.props.params.game));

    return (
      <div>{ content }</div>
    );
  }
};

export default Game;
