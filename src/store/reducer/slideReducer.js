import { createSlice } from "@reduxjs/toolkit"
import { slidedata } from "../../data/slidedata"

const slice = createSlice({
    name: "sliders",
    initialState: {
        sliders: slidedata,
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
export const { getSlider } = slice.actions
