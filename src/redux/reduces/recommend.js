import { SUBMITBANNER } from "../action-type";
import {Map} from 'immutable'
const defaultState = Map({
  banner: [1, 2, 3],
});

const recommend = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMITBANNER:
      return state.set("banner", action.data);
    default:
      return state;
  }
};

export default recommend;
