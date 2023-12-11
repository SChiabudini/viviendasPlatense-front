import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        productsCopy: [],
        selectedProduct: null
    },
    reducers: {
        getProductsReducer: (state, action) => {
            state.products = action.payload;
            state.productsCopy = action.payload;
        },
        getProductByIdReducer: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find(product => product._id === productId);
        },
        filterByRoomsReducer: (state, action) => {
            const productsByRooms = state.products.filter(
                product => product.rooms === action.payload
            )
            state.productsCopy = action.payload === 'allRooms' ? [...state.products] : productsByRooms
        },
        filterByTypeReducer: (state, action) => {
            const producstByType = state.products.filter(
                product => product.type === action.payload
            )
            state.productsCopy = action.payload === 'allTypes' ? [...state.products] : producstByType
        },
        orderByPriceReducer: (state, action) => {
            const productsOrderPrice = [...state.productsCopy];
            
            const compareAscending = (a, b) => a.price - b.price;
        
            const compareDescending = (a, b) => b.price - a.price;
        
            productsOrderPrice.sort(action.payload === 'A' ? compareAscending : compareDescending);
        
            state.productsCopy = productsOrderPrice;
        },
        orderBySizeReducer: (state, action) => {
            const productsOrderSize = [...state.productsCopy];
            
            const compareAscending = (a, b) => a.size - b.size;
        
            const compareDescending = (a, b) => b.size - a.size;
        
            productsOrderSize.sort(action.payload === 'A' ? compareAscending : compareDescending);
        
            state.productsCopy = productsOrderSize;
        },
    }
});

export const { getProductsReducer, getProductByIdReducer, filterByRoomsReducer, filterByTypeReducer, orderByPriceReducer, orderBySizeReducer } = productSlice.actions;

export default productSlice.reducer;