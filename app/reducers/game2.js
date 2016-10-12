import { fromJS } from 'immutable';

const game2 = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case 'CORRECT_GUESS':
      return state.setIn(['guessed', action.songId], true);
    default:
      return state;
  }
};

export default game2;
