import  {BASE_URL} from './config.js'
import request from '@/services/request'

export const getBanner = async ()=>{
    let data =  await request.get(BASE_URL+'/banner')
    return data
}

export const getHotRecommend = async (limit)=>{
    return await request.get(BASE_URL+'/personalized',{limit})
}

export const getHotAblum = async (limit) => {
    return await request.get(BASE_URL+'/top/album',{limit})
    
}

export const getTopList = async (idx) => {
    return await request.get(BASE_URL+'/top/list', {idx})
}