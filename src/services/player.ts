import  {BASE_URL} from './config.js'
import request from '../services/request'

export const getSongDetailData = async (ids:number)=>{
    return await request.get(BASE_URL+'/song/detail', {ids})
}

