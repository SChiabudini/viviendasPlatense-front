import axios from "axios";

import { getProductsReducer, getProductByIdReducer } from "./productSlice";

export const getProducts = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/house");
        dispatch(getProductsReducer(data));
    };
};

export const getProductById = (productId) => {
    return async (dispatch) =>{
            dispatch(getProductByIdReducer(productId));
    };
};