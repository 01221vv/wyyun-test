import hyRequest from '@/service';
export const getSongDetailApi = (ids: number) => {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  });
};
