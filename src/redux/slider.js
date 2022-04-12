import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchSliders = createAsyncThunk('sliders/fetchSliders', async () => {
    const res = await fetch(`${window.location.origin.toString()}/api/sliders`);
    const sliders = await res.json();

    return sliders;
});

// Slice
const slice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchSliders.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchSliders.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },

        [fetchSliders.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default slice.reducer