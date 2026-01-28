import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getBannerList,
  getRankList,
  getNewSongs,
  getPlayList,
  getSingerList
} from '../service/index';
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (args, { dispatch }) => {
    const res = await getBannerList();
    dispatch(setBannerList(res.banners));

    return res.banners;
  }
);
//首页推荐
export const fetchPlayListDataAction = createAsyncThunk(
  'PlayList',
  async (args, { dispatch }) => {
    const res = await getPlayList();
    dispatch(setPlayList(res.result));

    return res.result;
  }
);
//首页歌手
export const fetchSingerListDataAction = createAsyncThunk(
  'singers',
  async (args, { dispatch }) => {
    const res = await getSingerList(10);
    dispatch(setSingerList(res.artists));
    console.log(res.artists);
    return res.artists;
  }
);
//首页新碟上架
export const fetchNewSongsListDataAction = createAsyncThunk(
  'newSongs',
  async (args, { dispatch }) => {
    const res = await getNewSongs(5);
    dispatch(setNewSongsList(res.products));
    // console.log(res.products);
    return res.products;
  }
);
//首页排行榜
const RankIDlist = [19723756, 3779629, 2884035];
export const fetchRankListDataAction = createAsyncThunk(
  'rank',
  async (args, { dispatch }) => {
    const rankListData = [];

    for (const id of RankIDlist) {
      const res = await getRankList(id);
      rankListData.push(res);
      console.log('Rank data for ID', id, ':', res);
    }

    // 发送完整的排行榜数据到store
    dispatch(setRankList(rankListData));

    return rankListData;
  }
);
interface IRecommendState {
  banners: any[];
  PlayList: any[];
  SingerList: any[];
  RankList: any[];
  NewSongsList: any[];
}
const initialState: IRecommendState = {
  banners: [],
  PlayList: [],
  SingerList: [],
  RankList: [],
  NewSongsList: []
};
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannerList(state, action) {
      state.banners = action.payload;
    },
    setPlayList(state, action) {
      state.PlayList = action.payload;
    },
    setSingerList(state, action) {
      state.SingerList = action.payload;
    },
    setRankList(state, action) {
      state.RankList = action.payload;
    },
    setNewSongsList(state, action) {
      state.NewSongsList = action.payload;
    }
  }
});

export const {
  setBannerList,
  setPlayList,
  setSingerList,
  setNewSongsList,
  setRankList
} = recommendSlice.actions;
export default recommendSlice.reducer;
