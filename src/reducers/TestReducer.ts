import { createSlice } from '@reduxjs/toolkit';
import { ITest } from '@/types';

const initialState: ITest = {
  word: 'JavaScript',
};

export const TestReducer = createSlice({
  name: 'test',
  initialState,
  reducers: {
    changeWord: (state) => {
      if (state.word === 'JavaScript') {
        state.word = 'TypeScript';
      } else {
        state.word = 'JavaScript';
      }
    },
  },
});

export const { changeWord, } = TestReducer.actions;

export default TestReducer.reducer;
