import {
  SUBMITBANNER,
  SUBMITHOTREM,
  SUBMITFLYUPTOPLIST,
  SUBMITNEWSONGTOPLIST,
  SUBMITORIGINTOPLIST,
} from "../action-type";
import { Map } from "immutable";
const defaultState = Map({
  banner: [1, 2, 3],
  hotRecommend: [],
  flyUpTopList: [],
  originTopList: [],
  newSongTopList: [],
});

const recommend = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMITBANNER:
      return state.set("banner", action.data);
    case SUBMITHOTREM:
      return state.set("hotRecommend", action.data);
    case SUBMITFLYUPTOPLIST:
      return state.set("flyUpTopList", action.data);
    case SUBMITNEWSONGTOPLIST:
      return state.set("newSongTopList", action.data);
    case SUBMITORIGINTOPLIST:
      return state.set("originTopList", action.data);
    default:
      return state;
  }
};

export default recommend;
