import { SUBMITBANNER, SUBMITHOTREM } from "../action-type";
import { Map } from 'immutable'
const defaultState = Map({
  banner: [1, 2, 3],
  hotRecommend: []
});

const recommend = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMITBANNER: return state.set("banner", action.data)
    case SUBMITHOTREM: return state.set("hotRecommend", action.data);
    default:
      return state;

  }
};

export default recommend
