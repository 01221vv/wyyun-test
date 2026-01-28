import hyRequest from '@/service';
export const getBannerList = () => {
  return hyRequest.get({
    url: '/banner'
  });
};
export const getPlayList = (limit: number = 8) => {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  });
};
export const getSingerList = (limit: number) => {
  return hyRequest.get({
    url: '/top/artists',
    params: {
      limit
    }
  });
};
export const getNewSongs = (limit: number) => {
  return hyRequest.get({
    url: '/album/list',
    params: {
      limit
    }
  });
};
export const getRankList = (id: number) => {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  });
};
