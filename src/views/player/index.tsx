import React, {memo} from 'react'
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {getSizeImg} from '../../utils/data_format'
import {PlayerWrapper} from './style'
const Player:React.FC<{}> = memo((props)=>{
    //hooks
    const history = useHistory()

    //redux
    const {currentSong, lyric} = useSelector((state: any)=>({
        currentSong: state.getIn(["player", "currentSong"]),
        lyric: state.getIn(["player", "lyric"]),
    }), shallowEqual)
    return <PlayerWrapper className="wrap-v2">
        <main className="left">
            <div className="image">
            <img src={getSizeImg(currentSong?.al?.picUrl, 130)} alt=""/>
                <span className="image_cover cover">
                </span>
            <a href="">生成外联服务器</a>
            </div>
            <div className="songDetail">
                <header>
                    <i className="sprite_icon2"></i>
                    <h3>{currentSong?.name}</h3>
                </header>
                <div className="singer">
                    <span>歌手</span>
                    <a href="/todo">{currentSong?.ar&&currentSong?.ar[0].name}</a>
                </div>
                <div className="">
                    <span>所属专辑</span>
                    <a href="">{currentSong?.al?.name}</a>
                </div>
                <div className="operator">
                    <span className="play">
                        <a href="" className="play-icon sprite_button">
                            <span className="play sprite_button">
                                <i className="sprite_button"></i>
                                <span>播放</span>
                            </span>
                        </a>
                    </span>
                    <a href="">收藏</a>
                    <a href="">分享</a>
                    <a href="">下载</a>
                    <a href="">评论</a>
                </div>
                <div className="play-lyric">
                    {lyric.map((item:any)=>{
                        return <h3 key={item.content}>{item.content}</h3>
                    })}
                </div>
            </div>
        </main>
        <main className="right">
123
        </main>
    </PlayerWrapper>
})

export default Player