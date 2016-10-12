export const toggleItem = (round, word) => {
  return {
    type: 'TOGGLE_ITEM',
    round,
    word,
  };
};
