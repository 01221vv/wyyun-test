import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  currentSong: any;
  // 其他播放器状态...
}

const initialState: PlayerState = {
  currentSong: null
  // 初始值...
};

const playerSlice = createSlice({
  name: 'currentSong',
  initialState,
  reducers: {
    CurrentSongId: (state, action: PayloadAction<any>) => {
      state.currentSong = action.payload;
    }
    // 其他reducers...
  }
});

export const { CurrentSongId } = playerSlice.actions;
export default playerSlice.reducer;
