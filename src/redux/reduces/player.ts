import { Map } from "immutable";

import {
  SUBMITSONGDETAIL,
  CHANGEPLAYLISTINDEX,
  SUBMITPLAYLIST,
  CHANGESEQUENCE,
  SUBMITLYRIC,
  CHANGELYRICINDEX,
} from "../action-type";
import { Sequence, Iaction } from "../type";

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentIndex: 0,
  sequence: Sequence.order,
  lyric: [],
  currentLyricIndex: 0,
});

const player = (state = defaultState, action: Iaction) => {
  switch (action.type) {
    case SUBMITSONGDETAIL:
      return state.set("currentSong", action.data);
    case SUBMITPLAYLIST:
      return state.set("playList", action.data);
    case CHANGEPLAYLISTINDEX:
      return state.set("currentIndex", action.data);
    case CHANGESEQUENCE:
      return state.set("sequence", action.data);
    case SUBMITLYRIC:
      return state.set("lyric", action.data)
    case CHANGELYRICINDEX:
      return state.set('currentLyricIndex', action.data)
    default:
      return state;
  }
};

export default player;
