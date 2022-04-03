import { createSlice } from '@reduxjs/toolkit'
import { slidedata } from '../data/slidedata';

// Slice
const slice = createSlice({
    name: 'slider',
    initialState: {
        slider: slidedata,
    }
});

export default slice.reducer