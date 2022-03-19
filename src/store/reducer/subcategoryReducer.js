import { createSlice } from "@reduxjs/toolkit"
import { subcatdata } from "../../data/subcatdata"

const slice = createSlice({
    name: "subcategories",
    initialState: {
        subcategory: subcatdata,
    },
    reducers: {
        getCategory: (subcategories, action) => {
            const category = subcategories.category.find(i => i.id === Number(action.payload))
            subcategories.category = category
        }
    }
})

export default slice.reducer


// Actions
export const { getCategory } = slice.actions
