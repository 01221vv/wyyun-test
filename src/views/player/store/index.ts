import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { getUserPlayList } from '../service';

// interface PlayerState {
//   currentSong: any;
//   playList: any[];
//   currentIndex: number;
// }

// const initialState: PlayerState = {
//   currentSong: {
//     a: null,
//     additionalTitle: null,
//     al: {
//       id: 356555705,
//       name: '一半一半',
//       picUrl:
//         'https://p2.music.126.net/EgbPD3CwVQojZ4OWse4YrA==/109951172511748152.jpg',
//       tns: [],
//       pic_str: '109951172511748152'
//     },
//     alia: [],
//     ar: [],
//     awardTags: null,
//     cd: '01',
//     cf: '',
//     copyright: 1,
//     cp: 1416618,
//     crbt: null,
//     displayTags: null,
//     djId: 0,
//     dt: 235285,
//     entertainmentTags: null,
//     fee: 8,
//     ftype: 0,
//     h: {
//       br: 320000,
//       fid: 0,
//       size: 9413805,
//       vd: -47581,
//       sr: 48000
//     },
//     hr: {
//       br: 1589139,
//       fid: 0,
//       size: 46742038,
//       vd: -47575,
//       sr: 48000
//     },
//     id: 3333988321,
//     l: {
//       br: 128000,
//       fid: 0,
//       size: 3765549,
//       vd: -43225,
//       sr: 48000
//     },
//     m: {
//       br: 192000,
//       fid: 0,
//       size: 5648301,
//       vd: -44958,
//       sr: 48000
//     },
//     mainTitle: null,
//     mark: 17716748288,
//     markTags: [],
//     mst: 9,
//     mv: 0,
//     name: '一半一半',
//     no: 1,
//     noCopyrightRcmd: null,
//     originCoverType: 0,
//     originSongSimpleData: null,
//     pop: 100,
//     pst: 0,
//     publishTime: 1767456000000,
//     resourceState: true,
//     rt: '',
//     rtUrl: null,
//     rtUrls: [],
//     rtype: 0,
//     rurl: null,
//     s_id: 0,
//     single: 0,
//     songJumpInfo: null,
//     sq: {
//       br: 822515,
//       fid: 0,
//       size: 24195086,
//       vd: -47575,
//       sr: 48000
//     },
//     st: 0,
//     t: 0,
//     tagPicList: null,
//     v: 38,
//     version: 4
//   },
//   playList: [],
//   currentIndex: 0
// };

// const playerSlice = createSlice({
//   name: 'player',
//   initialState,
//   reducers: {
//     setCurrentSong(state, action) {
//       state.currentSong = action.payload;
//     },
//     setPlayList(state, action) {
//       state.playList = action.payload;
//     },
//     setCurrentIndex(state, action) {
//       state.currentIndex = action.payload;
//     }
//   }
// });

// // // 异步获取用户播放列表
// // export const fetchUserPlayListAction = createAsyncThunk(
// //   'userPlayList',
// //   async (args, { dispatch }) => {
// //     const res = await getUserPlayList(3333988321);
// //     dispatch(setPlayList(res));
// //     console.log(res);
// //     // return res.playlist;
// //   }
// // );

// export const { setCurrentSong, setPlayList, setCurrentIndex } =
//   playerSlice.actions;
// export default playerSlice.reducer;
