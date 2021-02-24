import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'


import { getSizeImg } from '@/utils/data_format'
import { PlayerWrapper } from './style'

import SimilaritySong from './app-play-child/similaritySong/index'
import IncludeSong from './app-play-child/includeSong/index'

enum showMoreEnum {
    show = '展开',
    none = '收起',
}
const Player: React.FC<{}> = memo((props) => {
    //props&state
    const [showMore, setshowMore] = useState(false)
    const [showMoreText, setshowMoreText] = useState(showMoreEnum.show)
    //redux
    const { currentSong, lyric } = useSelector((state: any) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyric: state.getIn(["player", "lyric"]),
    }), shallowEqual)

    //hooks
    const location = useLocation()

    //业务逻辑
    const clickShowMore = () => {
        setshowMore(!showMore)
        setshowMoreText(showMoreText === showMoreEnum.show ? showMoreEnum.none : showMoreEnum.show)
    }
    return <PlayerWrapper className="wrap-v2 content">
        <main className="left">
            <div className="image">
                <img src={getSizeImg(currentSong?.al?.picUrl, 130)} alt="" />
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
                    <a href="/todo">{currentSong?.ar && currentSong?.ar[0].name}</a>
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
                    <div className="topHalf">
                        {lyric.slice(0, 15).map((item: { time: string, content: string }, index: number) => {
                            return <h3 key={index}>{item.content}</h3>
                        })}
                    </div>
                    <div className={showMore ? "" : "lowerHalf"}>
                        {lyric.slice(15).map((item: { time: string, content: string }, index: number) => {
                            return <h3 key={index}>{item.content}</h3>
                        })}
                    </div>
                    <div className="showMore" onClick={() => { clickShowMore() }}>{showMoreText}</div>
                </div>
            </div>
        </main>
        <main className="right">
            <IncludeSong/>
            <SimilaritySong/>
        </main>
    </PlayerWrapper>
})

export default Player