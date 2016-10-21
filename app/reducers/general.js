import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const general = (
  state = fromJS({
    lastGameId: 1,
    lastRoundIds: {
      1: 1,
      2: 1,
    },
  }),
  action
) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      const { pathname } = action.payload;

      if (pathname.includes('game')) {
        const [ game, round, ...rest ] = pathname.match(/^\d+|\d+\b|\d+(?=\w)/g);

        if (pathname.includes('round')) {
          return state.setIn(['lastRoundIds', game], round);
        } else {
          return state.set('lastGameId', game);
        }
      }
      return state;
    }
    default:
      return state;
  }
};

export default general;
