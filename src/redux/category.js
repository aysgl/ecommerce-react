import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchCategory = createAsyncThunk('categories/fetchCategory', async () => {
    const res = await fetch(`${window.location.origin.toString()}/api/category`);
    const categories = await res.json();

    return categories;
});

// Slice
const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchCategory.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchCategory.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },

        [fetchCategory.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default slice.reducer
