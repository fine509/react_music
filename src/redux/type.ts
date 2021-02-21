export enum Sequence {//歌曲播放顺序
    order = 0,//顺序
    random = 1,//随机
    single = 2,//单曲循环
  }

export interface Iaction {
    type: string;
    data: any;
  }