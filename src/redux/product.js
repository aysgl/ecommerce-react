import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { prodata } from '../data/prodata';
// import products from '../pages/api/products/products';

// Slice
const slice = createSlice({
    name: 'product',
    initialState: {
        product: prodata,
    },
    // reducers: {
    //     setProduct: (state, action) => {
    //         return {
    //             ...state,
    //             product: action.payload
    //         }
    //     },
    //     getProduct: (state, action) => {
    //         return {
    //             ...state,
    //             product: action.payload
    //         }
    //     }
    // },
});

// export const getProduct = (state) => state.product;

export const { setProduct, getProduct } = slice.actions

export default slice.reducer
