const game1 = (
  state = [],
  action
) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.updateIn(['hidden', action.round, action.word], x => !x);
    default:
      return state;
  }
};

export default game1;
