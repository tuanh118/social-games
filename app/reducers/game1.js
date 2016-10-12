import { fromJS } from 'immutable';

const game1 = (
  state = fromJS({}),
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
