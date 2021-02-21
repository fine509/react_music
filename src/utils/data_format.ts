export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) return count;
  else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else return Math.floor(count / 10000000) / 10 + "亿";
}

export function getSizeImg(imgUrl: string, size: number) {
  return `${imgUrl}?param=${size}x${size}`;
}

export const transformTime = (time: number): string => {
  return `${Math.floor(time / 1000 / 60)}
    :${
      Math.ceil((time / 1000) % 60) < 10
        ? "0" + Math.ceil((time / 1000) % 60)
        : Math.ceil((time / 1000) % 60)
    }`;
};

export const getMusicUrl = (id: number): string => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

export const getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export const transfromLyric = (lyric: string) => {
  const lineStrings = lyric.split("\n");
  let time: number = 0;
  const lyricArr = [];
  for (let line of lineStrings) {
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = +result![1] * 60 * 1000;
      const time2 = +result![2] * 1000;
      const time3 = result![3].length === 3 ? +result![3] : +result![3] * 10;
      time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim(); //const content1 = line.split(']')[1]
      const lineObj = { time, content };
      lyricArr.push(lineObj);
    }
  }
  return lyricArr;
};
