import { createSlice } from "@reduxjs/toolkit"
import { catdata } from "../../data/catdata"

const slice = createSlice({
    name: "categories",
    initialState: {
        category: catdata,
    },
    reducers: {
        getCategory: (categories, action) => {
            const category = categories.category.find(i => i.id === Number(action.payload))
            categories.category = category
        }
    }
})

export default slice.reducer


// Actions
export const { getCategory } = slice.actions
