import JobAPI from 'api/JobAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setDescription, setLocation, setFullTime, setPage } from 'redux/filtersSlice';

// thunks
export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobsStatus',
    async (filterObj, thunkAPI) => {
        const { description, location, fullTime, page } = filterObj;
        try {
            thunkAPI.dispatch(setDescription(description));
            thunkAPI.dispatch(setLocation(location));
            thunkAPI.dispatch(setFullTime(fullTime));
            thunkAPI.dispatch(setPage(page));
            const response = await JobAPI.fetchJobs(description, location, fullTime, page);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const fetchJobById = createAsyncThunk(
    'jobs/fetchJobByIdStatus',
    async (jobId, thunkAPI) => {
        try {
            const response = await JobAPI.fetchJobDetail(jobId);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

export const INITIAL_STATE = {
    activeJob: null,
    jobs: []
};

// slice
const jobsSlice = createSlice({
    name: 'jobs',
    initialState: INITIAL_STATE,
    reducers: {
    },
    extraReducers: {
        [fetchJobs.fulfilled]: (state, action) => {
            state.jobs = action.payload;
        },
        [fetchJobById.fulfilled]: (state, action) => {
            state.activeJob = action.payload;
        }
    }
});

export default jobsSlice.reducer;
