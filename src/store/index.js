import { configureStore } from '@reduxjs/toolkit';
import compassReducer from './compassSlice';

export default configureStore({
  reducer: {
    compass: compassReducer,
  },
});
