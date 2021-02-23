import { getSongDetailData, getLyric } from "@/services/player";
import {
  SUBMITSONGDETAIL,
  CHANGEPLAYLISTINDEX,
  SUBMITPLAYLIST,
  CHANGESEQUENCE,
  SUBMITLYRIC,
  CHANGELYRICINDEX,
} from "../action-type";
import { Iaction, Sequence } from "../type";
import { transfromLyric } from "@/utils/data_format";

export const actions = (data: Iaction): Iaction => ({
  type: data.type,
  data: data.data,
});

export const getSongDetial = (ids: number) => {
  return async (dispatch: any, getState: any) => {
    //根据id拿到数据
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((item: any) => item.id === ids); //没找到是-1，
    if (songIndex !== -1) {
      dispatch(changePlayListIndex(songIndex));
      const song = playList[songIndex];
      dispatch(actions({ type: SUBMITSONGDETAIL, data: song }));
      //获取歌词信息
      dispatch(getLyricAction(song.id));
    } else {
      let data = await getSongDetailData(ids);
      const songs = data?.data?.songs[0];
      if (!Boolean(songs)) return;
      dispatch(actions({ type: SUBMITSONGDETAIL, data: songs })); //将当前播放歌曲改变
      dispatch(
        actions({ type: SUBMITPLAYLIST, data: playList.concat([songs]) })
      ); //将歌曲放入playlist
      dispatch(changePlayListIndex(playList.concat([songs]).length - 1)); //改变当前的索引值

      //获取歌词信息
      dispatch(getLyricAction(songs.id));
    }
  };
};

export const changePlayListIndex = (index: number) => {
  return actions({ type: CHANGEPLAYLISTINDEX, data: index });
};

export const changeSequence = (type: number) => {
  return actions({ type: CHANGESEQUENCE, data: type });
};

export const getLyricAction = (id: number) => {
  return (dispatch: any) => {
    getLyric(id).then((res: any) => {
      const lyric = transfromLyric(res.data?.lrc?.lyric);
      dispatch(actions({ type: SUBMITLYRIC, data: lyric }));
    });
  };
};

export const changeLyricIndex = (index: number) => {
  return actions({ type: CHANGELYRICINDEX, data: index });
};
