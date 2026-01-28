import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './moudle/couter';
import recommendReducer from '../views/discover/c-views/recommed/store';
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux';
const store = configureStore({
  reducer: {
    // discover: discoverReducer,
    counter: counterReducer,
    recommend: recommendReducer
  }
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const appShallowEqual = shallowEqual;

export default store;
