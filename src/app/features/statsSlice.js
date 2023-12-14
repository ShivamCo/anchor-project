import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentCount: 0,
    favoriteCount: 0,
    likeCount:0,
    subscriber: 0,
    viewCount: 0
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setStats(state, action) {
      state.value = action.payload;
    }
    
  },
});


export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;