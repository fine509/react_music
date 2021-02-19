import React,{memo} from 'react'
import { useMount } from 'react-use'
import { useDispatch, useSelector, shallowEqual} from 'react-redux'

import {getHotRecommendData} from '../../../../../../redux/actions/recommend';
import { GETHOTRECOMMEND } from '../types'

import {HotRecommendWrapper} from './style'
import ThmemRecommend from '../../../../../../components/theme-header-recommend/index'
const HotRecommend:React.FC<{}> =  memo(() => {


    //redux
    const dispatch = useDispatch()
    const recommend = useSelector((state:any)=>({
        hotRecommend: state.getIn(['recommend', 'hotRecommend'])
    }),shallowEqual)
    useMount(()=>{
        dispatch(getHotRecommendData(GETHOTRECOMMEND))
    })
    console.log(recommend.hotRecommend)
    return (
        <HotRecommendWrapper>
            <ThmemRecommend title="热门推荐" keywords={['华语','流行','摇滚','民谣','电子']}></ThmemRecommend>

        </HotRecommendWrapper>
    )
})
export default HotRecommend