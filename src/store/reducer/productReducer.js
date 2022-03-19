import { createSlice } from "@reduxjs/toolkit"
import { prodata } from "../../data/prodata"

const Deneme = (price, discount) => {
    const total = (price * discount) / 100
    const amount = price - total;
}

const slice = createSlice({
    name: "products",
    initialState: {
        product: prodata,
        amount: Deneme(prodata.price, prodata.discount),
        cart: [],
    },
    reducers: {
        setProductDetail: (products, action) => {
            const product = prodata.find(i => i.slug === action.payload)
            products.product = product

            // console.log("prodatam", prodata);
        },

        discountCalculate: (products, action) => {
            const total = (products.price * products.discount) / 100
            const amount = products.price - total;

            products.amount.push(action.payload)
            console.log("amount", amount)
        }
    }
})

export default slice.reducer

// Actions
export const { setProductDetail, addToCart, changeCartCount, removeItemFromCart, discountCalculate, amount } = slice.actions