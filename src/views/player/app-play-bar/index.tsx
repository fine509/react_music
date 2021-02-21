import React, { useRef, useState, useCallback, useEffect } from "react";
import { Slider } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useMount } from "react-use";
import { message } from "antd";

import { Sequence } from "../../../redux/type";
import {
  getSongDetial,
  changeSequence,
  changePlayListIndex,
  changeLyricIndex,
} from "../../../redux/actions/player";
import {
  getSizeImg,
  transformTime,
  getMusicUrl,
  getRandom,
} from "../../../utils//data_format";

import { AppPlayWrapper, Control, Operator, PlayInfo } from "./style";

const AppPlay: React.FC<{}> = (props) => {
  //redux
  const dispatch = useDispatch();
  const {
    currentSong,
    currentIndex,
    playList,
    sequence,
    lyric,
    currentLyricIndex,
  } = useSelector(
    (state: any) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      currentIndex: state.getIn(["player", "currentIndex"]),
      sequence: state.getIn(["player", "sequence"]),
      lyric: state.getIn(["player", "lyric"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  //props & state
  const [currentTime, setcurrentTime] = useState(0);
  const [progress, setprogress] = useState(0);
  const [relyAutoPlay, setrelyAutoPlay] = useState(true);
  const [isPlay, setisPlay] = useState(false);
  const [lyricContent, setlyricContent] = useState(
    lyric[currentLyricIndex]?.content
  );

  //hooks
  useMount(() => {
    dispatch(getSongDetial(1808492017));
  });
  const AudioRef = useRef(null);
  useEffect(() => {
    (AudioRef.current as any).src = getMusicUrl(currentSong?.id);
    (AudioRef.current as any)
      .play()
      .then((res: any) => {
        setisPlay(true);
      })
      .catch((err: any) => {
        setisPlay(false);
      });
  }, [currentSong]);
  //业务逻辑

  const playMusic = useCallback(() => {
    if (!isPlay) (AudioRef.current as any).play();
    else (AudioRef.current as any).pause();
    setisPlay(!isPlay);
  }, [isPlay]);
  const playNextOrPre = (type: string) => {
    const length = playList.length;
    let index =
      type === "next"
        ? currentIndex === length - 1
          ? 0
          : currentIndex + 1
        : currentIndex === 0
        ? length - 1
        : currentIndex - 1;
    switch (sequence) {
      case 2:
      case 0:
        index = index;
        break;
      case 1:
        index = getRandom(0, length);
        break;
      default:
        return;
    }
    dispatch(changePlayListIndex(index));
    dispatch(getSongDetial(playList[index].id));
  };
  //获取播放时间, 这个不能用useCallback,因为每次组件
  const getTime = useCallback(
    (e: any) => {
      if (relyAutoPlay) {
        setcurrentTime(e.target.currentTime * 1000);
        setprogress(((e.target.currentTime * 1000) / currentSong.dt) * 100);
      }
      if (Boolean(lyric.length)) {
        let i = 0;
        for (; i < lyric.length; i++) {
          if (e.target.currentTime * 1000 < lyric[i].time) {
            if (currentLyricIndex !== i - 1) {
              //为了不让dispatch太多次
              message.open({
                key: "lyric",
                content: i === 0 ? lyric[i].content : lyric[i - 1].content,
                duration: 0,
                type: "info",
              });
              dispatch(changeLyricIndex(i === 0 ? i : i - 1));
            }
            break;
          }
        }

        setlyricContent(i === 0 ? lyric[i].content : lyric[i - 1].content);
      }
    },
    [currentSong.dt, relyAutoPlay, lyric, dispatch, currentLyricIndex]
  );
  //进度条滚动 传入组件的函数，用useCallback包裹起来提高性能,不会重复更新组件,这个函数依赖于currentSong.dt,因为一开始为Undefined,只有依赖
  //currentSong.dt,当这个值改变时才会重新渲染组件。
  const SlideChange = useCallback(
    (e: number) => {
      setrelyAutoPlay(false);
      setprogress(e);
      setcurrentTime((e / 100) * currentSong.dt);
    },
    [currentSong.dt]
  );
  const SlideOnMouse = useCallback(
    (e: number) => {
      (AudioRef.current as any).currentTime =
        ((e / 100) * currentSong.dt) / 1000;
      setprogress(e); //因为赋值回调是异步，自动播放还是会获取之前的时间值,所以直接设置当前进度就行
      setrelyAutoPlay(true);
      if (!isPlay) playMusic(); //暂停时会重新执行
    },
    [currentSong.dt, isPlay, playMusic]
  );
  //歌曲播放完播放下一首
  const handleEnded = () => {
    switch (sequence) {
      case 1:
      case 0:
        playNextOrPre("next");
        setisPlay(false);
        break;
      case 2:
        (AudioRef.current as any).play();
        break;
      default:
        return;
    }
  };
  const changeSequenceType = () => {
    switch (sequence) {
      case 0:
        dispatch(changeSequence(Sequence.random));
        break;
      case 1:
        dispatch(changeSequence(Sequence.single));
        break;
      case 2:
        dispatch(changeSequence(Sequence.order));
        break;
      default:
        return;
    }
  };
  return (
    <AppPlayWrapper className="sprite_player">
      <header className="lyric">{lyricContent}</header>
      <main className="content wrap-v2">
        <Control isPlaying={isPlay}>
          <button
            className="prev sprite_player"
            onClick={() => {
              playNextOrPre("pre");
            }}
          />
          <button
            className="play sprite_player"
            onClick={() => {
              playMusic();
            }}
          />
          <button
            className="next sprite_player"
            onClick={() => {
              playNextOrPre("next");
            }}
          />
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="todo">
              <img src={getSizeImg(currentSong?.al?.picUrl, 34)} alt="" />
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
              <Slider
                defaultValue={30}
                value={progress}
                onChange={(e: number) => {
                  SlideChange(e);
                }}
                onAfterChange={(e: number) => {
                  SlideOnMouse(e);
                }}
              />
              <div className="time">
                <span className="now-time">{transformTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="total-time">
                  {transformTime(currentSong.dt)}
                </span>
              </div>
            </div>
          </main>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor" />
            <button className="sprite_player btn share" />
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume" />
            <button
              className="sprite_player btn loop"
              onClick={() => {
                changeSequenceType();
              }}
            />
            <button className="sprite_player btn playlist" />
          </div>
        </Operator>
      </main>
      <audio
        ref={AudioRef}
        onTimeUpdate={(e) => {
          getTime(e);
        }}
        onEnded={() => {
          handleEnded();
        }}
      />
    </AppPlayWrapper>
  );
};

export default AppPlay;
