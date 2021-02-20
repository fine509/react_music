import React, {useRef} from 'react';
import { Slider } from 'antd';
import { useDispatch, useSelector, shallowEqual} from 'react-redux'
import { useMount } from 'react-use'

import {getSongDetial} from '../../../redux/actions/player'
import {getSizeImg, transformTime, getMusicUrl} from '../../../utils//data_format'

import { AppPlayWrapper, Control, Operator, PlayInfo } from './style';

const AppPlay: React.FC<{}> = (props) => {
    //redux
    const dispatch = useDispatch()
    const {currentSong} = useSelector((state:any)=>({
        currentSong: state.getIn(['player','currentSong'])
    }),shallowEqual)
    //hooks
    useMount(()=>{
        dispatch(getSongDetial(167876))
    })
    const AudioRef = useRef(null)

    //业务逻辑
    const playMusic = ()=>{
        (AudioRef.current as any).src = getMusicUrl(currentSong?.id);
        (AudioRef.current as any).play()
    }
	return (
		<AppPlayWrapper className="sprite_player">
			<main className="content wrap-v2">
				<Control isPlaying={false}>
					<button className="prev sprite_player" />
					<button className="play sprite_player" onClick={()=>{playMusic()}} />
					<button className="next sprite_player" />
				</Control>
				<PlayInfo>
					<div className="image">
						<a href="todo">
							<img
								src={getSizeImg(currentSong?.al?.picUrl,34)}
								alt=""
							/>
						</a>
					</div>
					<main className="info">
						<div className="song">
							<span className="song-name">{currentSong?.name}</span>/
							<a href="todo" className="sing-name">
								{currentSong?.ar && currentSong?.ar[0].name}
							</a>
						</div>
						<div className="progress">
							<Slider defaultValue={30} />
							<div className="time">
								<span className="now-time">2:40</span>
								<span className="divider">/</span>
								<span className="total-time">{transformTime(currentSong.dt)}</span>
							</div>
						</div>
					</main>
				</PlayInfo>
				<Operator sequence={0}>
					<div className="left">
						<button className="sprite_player btn favor" />
						<button className="sprite_player btn share" />
					</div>
					<div className="right sprite_player">
						<button className="sprite_player btn volume" />
						<button className="sprite_player btn loop" />
						<button className="sprite_player btn playlist" />
					</div>
				</Operator>
			</main>
            <audio ref={AudioRef} />
		</AppPlayWrapper>
	);
};

export default AppPlay;
