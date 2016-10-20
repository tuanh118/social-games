import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const general = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('lastRoundId', action.payload.pathname);
    default:
      return state;
  }
};

export default general;
