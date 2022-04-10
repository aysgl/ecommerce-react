import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import product from './product'
import category from './category'
import subcategory from './subcategory'
import slider from "./slider"
import user from "./user"

const reducer = combineReducers({
    product,
    category,
    subcategory,
    slider,
    user
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;