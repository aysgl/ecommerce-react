import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchSubCategory = createAsyncThunk('subcategories/fetchCategory', async () => {
    const res = await fetch('http://localhost:4000/api/subcategory');
    const subcategories = await res.json();

    return subcategories;
});

// Slice
const slice = createSlice({
    name: 'subcategory',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchSubCategory.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchSubCategory.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },

        [fetchSubCategory.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default slice.reducer
