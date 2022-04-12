import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: null,
    status: 'idle',
    error: null,
};

export const fetchSliders = createAsyncThunk('sliders/fetchSliders', async () => {
    const res = await fetch('http://localhost:4000/api/sliders');
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


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// const initialState = {
//     items: null,
//     status: 'idle',
//     error: null,
// };

// export const fetchSlider = createAsyncThunk('slider/fetchSlider', async () => {
//     const res = await fetch('http://localhost:4000/api/slider');
//     const slider = await res.json();

//     return slider;
// });

// // Slice
// const slice = createSlice({
//     name: 'slider',
//     initialState,
//     reducers: {},

//     extraReducers: {
//         [fetchSlider.pending]: (state) => {
//             state.status = 'loading';
//         },

//         [fetchSlider.fulfilled]: (state, action) => {
//             state.status = 'succeeded';
//             state.items = action.payload;
//         },

//         [fetchSlider.rejected]: (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//         },
//     },
// });

// export default slice.reducer
