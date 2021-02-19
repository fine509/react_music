import React, { memo } from 'react'


import {AlbumWrapper} from './style'
import ThmemRecommend from '../../../../../../components/theme-header-recommend/index'
const Album:React.FC<{}> = memo(() => {
    return (
        <AlbumWrapper>
           <ThmemRecommend title="新碟上架" />
        </AlbumWrapper>
    )
})

export default Album