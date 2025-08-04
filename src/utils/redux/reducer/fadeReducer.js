import { FIRST_LOAD } from '../actions/firstLoad';

const fadeReducer = (state = true, action) => {
  switch (action.type) {
    case FIRST_LOAD:
      return !state;
    default:
      return state;
  }
};

export default fadeReducer;
