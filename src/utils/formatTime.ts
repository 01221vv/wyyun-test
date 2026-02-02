// 获取歌曲总时长（从dt字段，单位是毫秒）
export const getSongDurationFromData = (song: any) => {
  if (!song || !song.dt) return 0;
  return Math.floor(song.dt / 1000); // 转换为秒
};

export const formatTime = (time: number) => {
  if (isNaN(time) || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
