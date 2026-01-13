import { createSlice } from '@reduxjs/toolkit';

// 创建counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    }
  }
});

// 导出actions
export const { increment, decrement } = counterSlice.actions;

// 导出reducer (注意：这里导出的是slice的reducer属性，而不是整个slice对象)
export const counterReducer = counterSlice.reducer;

// 导出默认的reducer
export default counterReducer;
