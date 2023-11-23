import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        getProductsReducer: (state, action) => {
            state.products = action.payload
        }
    }
})


export const { getProductsReducer } = productSlice.actions

export default productSlice.reducer 