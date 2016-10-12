export const toggleItem = (round, word) => {
  return {
    type: 'TOGGLE_ITEM',
    round,
    word,
  };
};

export const correctGuess = (songId) => {
  return {
    type: 'CORRECT_GUESS',
    songId,
  }
};
