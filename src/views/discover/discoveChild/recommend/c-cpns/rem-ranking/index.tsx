import React, { memo } from 'react'


import {RankingWrapper} from './style'
import ThmemRecommend from '../../../../../../components/theme-header-recommend/index'
const Ranking:React.FC<{}> = memo(() => {
    return (
        <RankingWrapper>
            <ThmemRecommend title="榜单" />
        </RankingWrapper>
    )
})

export default Ranking