import { createSlice } from '@reduxjs/toolkit'
import { subcatdata } from '../data/subcatdata';

// Slice
const slice = createSlice({
    name: 'subcategory',
    initialState: {
        subcategory: subcatdata,
    }
});

export default slice.reducer