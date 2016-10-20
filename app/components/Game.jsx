import React from 'react';

const Game = (props) => {
  const game = parseInt(props.params.game);

  return (
    <div className="text-center">
      <h1>Game {game}</h1>
    </div>
  );
};

export default Game;
