import React from 'react';

const Game = (props) => {
  const game = parseInt(props.params.game);

  return (
    <div className="jumbotron vertical-center">
      <h1 className="text-center">
        Game {game}
      </h1>
    </div>
  );
};

export default Game;
