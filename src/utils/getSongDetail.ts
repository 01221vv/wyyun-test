// 获取歌曲详情
import { getSongDetailApi } from '@/views/player/service';
export const getSongDetail = async (songId: number) => {
  try {
    const data = await getSongDetailApi(songId);
    console.log('data', data);

    if (data.songs && data.songs.length > 0) {
      return data.songs[0];
    }
    return null;
  } catch (error) {
    console.error('获取歌曲详情失败:', error);
    return null;
  }
};
