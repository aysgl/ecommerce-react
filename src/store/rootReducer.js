import { combineReducers } from "@reduxjs/toolkit"
import productReducer from "./reducer/productReducer"
import categoryReducer from "./reducer/categoryReducer"
import slideReducer from "./reducer/slideReducer"
import subcategoryReducer from "./reducer/subcategoryReducer"

export default combineReducers({
    sliders: slideReducer,
    products: productReducer,
    categories: categoryReducer,
    subcategories: subcategoryReducer,
})