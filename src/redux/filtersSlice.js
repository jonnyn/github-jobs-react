import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
    description: null,
    location: null,
    fullTime: false,
    page: 1
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        setDescription(state, action) {
            state.description = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload
        },
        setFullTime(state, action) {
            state.fullTime = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    }
});

export const { setDescription, setLocation, setFullTime, setPage } = filtersSlice.actions;

export default filtersSlice.reducer;