import React from 'react'


import {RecommendWrapper, Content, RecommendLeft, RecommendRight} from './style'
import TopBanner from './c-cpns/top-banner/index'
import HotRecommend from './c-cpns/hot-recommend/index'
import Album from './c-cpns/new-album/index'
import Ranking from './c-cpns/rem-ranking/index'
const Recommend:React.FC<{}> = (props)=>{
    return <RecommendWrapper>
        <TopBanner></TopBanner>
        <Content className="wrap-v2">
            <RecommendLeft>
                <HotRecommend />
                <Album />
                <Ranking />
            </RecommendLeft>
            <RecommendRight></RecommendRight>
        </Content>
        </RecommendWrapper>
}

export default Recommend