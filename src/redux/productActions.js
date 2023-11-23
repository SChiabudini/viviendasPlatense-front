import axios from "axios";

import { getProductsReducer } from "./productSlice";

export const getProducts = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/house");
        dispatch(getProductsReducer(data));
    };
};