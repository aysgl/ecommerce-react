import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { prodata } from "../../pages/api/products"

const slice = createSlice({
    name: "products",
    initialState: {
        products: prodata,
        cart: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        },
    },
})

const { productSuccess } = slice.actions

export const fetchProducts = () => async dispatch => {
    try {
        await api.get('/products')
            .then((response) => dispatch(productSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}

export default slice.reducer