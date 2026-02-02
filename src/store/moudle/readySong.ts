import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ReadySongState {
  currentSongId: number | null;
  name: string | null;
}
const initialState: ReadySongState = {
  currentSongId: null,
  name: null
};
const readySongSlice = createSlice({
  name: 'readySong',
  initialState,
  reducers: {
    setReadySong(state, action: PayloadAction<ReadySongState>) {
      state.currentSongId = action.payload.currentSongId;
      state.name = action.payload.name;
    }
  }
});
export const { setReadySong } = readySongSlice.actions;
export default readySongSlice.reducer;
