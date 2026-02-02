import { configureStore } from '@reduxjs/toolkit';
import CurrentSongId from './moudle/getIdToPlay';
// import playerReducer from '../views/player/store';
import recommendReducer from '../views/discover/c-views/recommed/store';
import readySongReducer from './moudle/readySong';
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux';
const store = configureStore({
  reducer: {
    // discover: discoverReducer,
    // counter: counterReducer,
    currentSong: CurrentSongId,
    recommend: recommendReducer,
    readySong: readySongReducer
    // player: playerReducer
  }
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const appShallowEqual = shallowEqual;

export default store;
