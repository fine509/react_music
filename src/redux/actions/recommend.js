import request from '@/services/request'
import { SUBMITBANNER, SUBMITHOTREM } from '../action-type'
import { getBanner, getHotRecommend } from '@/services/recommend.js'
export const actions = (type, data) => ({
  type,
  data,
});

export const getBannerAction = ()=>{
  return (dispatch)=>{
    getBanner().then(res=>{
      dispatch(actions(SUBMITBANNER,res.data.banners))
    })
  }
}

export const getHotRecommendData = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res=>{
      dispatch(actions(SUBMITHOTREM,res.data.result))
    })
  }
}