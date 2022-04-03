import { createSlice } from '@reduxjs/toolkit'
import { catdata } from '../data/catdata';

// Slice
const slice = createSlice({
    name: 'category',
    initialState: {
        category: catdata,
    }
});

export default slice.reducer