import request from "@/services/request";
import {
  SUBMITBANNER,
  SUBMITHOTREM,
  SUBMITFLYUPTOPLIST,
  SUBMITNEWSONGTOPLIST,
  SUBMITORIGINTOPLIST,
} from "../action-type";
import {
  getBanner,
  getHotRecommend,
  getTopList,
} from "@/services/recommend.js";
export const actions = (type, data) => ({
  type,
  data,
});

export const getBannerAction = () => {
  return (dispatch) => {
    getBanner().then((res) => {
      dispatch(actions(SUBMITBANNER, res.data.banners));
    });
  };
};

export const getHotRecommendData = (limit) => {
  return (dispatch) => {
    getHotRecommend(limit).then((res) => {
      dispatch(actions(SUBMITHOTREM, res.data.result));
    });
  };
};

export const getTopListData = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch(idx) {
        case 3 :dispatch(actions(SUBMITFLYUPTOPLIST, res.data.playlist));break;
        case 0 :dispatch(actions(SUBMITNEWSONGTOPLIST, res.data.playlist));break;
        case 2 :dispatch(actions(SUBMITORIGINTOPLIST, res.data.playlist));break;
        default: return
      }
      
    });
  };
};
