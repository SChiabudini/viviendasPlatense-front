import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";
import Portfolios from "./portfolioSlice";


export default configureStore({
    reducer:{
        products: Products,
        portfolios: Portfolios
    }
})