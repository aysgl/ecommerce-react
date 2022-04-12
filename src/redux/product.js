import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await fetch('http://localhost:4000/api/products');
    const products = await res.json();

    return products;
});

// Slice
const slice = createSlice({
    name: 'product',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },

        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default slice.reducer
