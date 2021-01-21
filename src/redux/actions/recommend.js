import request from '@/services/request'
import { SUBMITBANNER } from '../action-type'
import { getBanner } from '@/services/recommend.js'
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