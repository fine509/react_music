import  {BASE_URL} from './config.js'
import request from '@/services/request'

export const getBanner = async ()=>{
    return await request.get(BASE_URL+'/banner')
}