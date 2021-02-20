export function getCount(count: number) {
	if (count < 0) return;
	if (count < 10000) return count;
	else if (Math.floor(count / 10000) < 10000) {
		return Math.floor(count / 1000) / 10 + '万';
	} else return Math.floor(count / 10000000) / 10 + '亿';
}

export function getSizeImg(imgUrl: string, size: number) {
	return `${imgUrl}?param=${size}x${size}`;
}

export const transformTime = (time: number): string => {
	return `${Math.floor(time / 1000 / 60)}
    :${Math.ceil((time / 1000) % 60) < 10 ? '0' + Math.ceil((time / 1000) % 60) : Math.ceil((time / 1000) % 60)}`;
};


export const getMusicUrl = (id:number):string => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}