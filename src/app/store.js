import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from 'redux/jobsSlice';
import filtersReducer from 'redux/filtersSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer
  }
});
