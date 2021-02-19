import React,{memo} from 'react'

import {SongsCoverWrapper} from './style'
import {getCount, getSizeImg} from '../../utils/data_format'
const SongCover:React.FC<{item:any}> = memo((props) => {
    const {item} = props

    return <SongsCoverWrapper>
       <div className="cover-top">
           <img src={getSizeImg(item.picUrl,140)} alt=""/>
           <div className="cover sprite_covor">
                <div className="info sprite_covor">
                    <span>
                        <i className="sprite_icon erji">
                            {getCount(+item.playCount)}
                        </i>
                        <i className="sprite_icon play"></i>
                    </span>
                </div>
           </div>
       </div>
       <div className="cover-bottom text-nowrap">{item.name}</div>
       <div className="cover-source">by{item.copywriter}</div>
    </SongsCoverWrapper>
})

export default SongCover