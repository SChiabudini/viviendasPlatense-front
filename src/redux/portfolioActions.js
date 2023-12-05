import axios from "axios";

import { getPortfoliosReducer } from "./portfolioSlice";

export const getPortfolios = () => {
    return async (dispatch) => {
        const { data } = await axios.get("/portfolio");
        dispatch(getPortfoliosReducer(data));
    };
};