import { combineReducers } from '@reduxjs/toolkit';
import statsReducer from './features/statsSlice';

const rootReducer = combineReducers({
  stats: statsReducer,
  
});

export default rootReducer;