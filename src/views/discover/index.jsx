import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'

import discoverStyle from './discoverStyle.module.scss'

export default memo(function MHDiscover() {
    return (
        <div>
           <div className={[discoverStyle["bigBox"]]}>
           <div className={["wrap-v2",discoverStyle["box"]].join(" ")}>
           <li><NavLink exact   to="/discover/recommend" >推荐</NavLink></li>
           <li><NavLink exact   to="/discover/seniority">排行榜</NavLink></li>
           <li><NavLink exact   to="/discover/songList">歌单</NavLink></li>
           <li><NavLink exact   to="/discover/broadcasting">主播电台</NavLink></li>
           <li><NavLink exact   to="/discover/songer">歌手</NavLink></li>
           <li><NavLink exact   to="/discover/newSong">新歌上架</NavLink></li>
           <li></li>
           <li></li>
           </div></div>
        </div>
    )
})
