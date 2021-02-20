import request from "../../services/request";
import {getSongDetailData} from '../../services/player'
import {SUBMITSONGDETAIL} from '../action-type'

interface Iaction {
    type:string
    data:any
}
export const actions = (data:Iaction):Iaction=>({
    type:data.type,
    data:data.data
})


export const getSongDetial = (ids:number)=>{
    return async (dispatch:any) => {
        let data = await getSongDetailData(ids)
        dispatch(actions({type:SUBMITSONGDETAIL,data:data?.data.songs[0]}))
    }
}