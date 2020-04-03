import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        description: null,
        location: null,
        fullTime: false
    },
    reducers: {
        setDescription(state, action) {
            const { description } = action.payload;
            state.description = description;
        },
        setLocation(state, action) {
            const { location } = action.payload;
            state.location = location
        },
        setFullTime(state, action) {
            const { fullTime } = action.payload;
            state.fullTime = fullTime;
        }
    }
});

export const { setDescription, setLocation, setFullTime } = filtersSlice.actions;

export default filtersSlice.reducer;