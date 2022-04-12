import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "common",
    initialState: {
        colors: ["primary", "success", "warning"],
        hexColors: ["#ff0984", "#0ac5b6", "#ffc107"]
    },
    reducers: {
        getSlider: (sliders, action) => {
            const product = sliders.product.find(i => i.id === Number(action.payload))
            sliders.product = product
        },
    }
})

export default slice.reducer


// Actions
export const { getSlider, colors } = slice.actions
