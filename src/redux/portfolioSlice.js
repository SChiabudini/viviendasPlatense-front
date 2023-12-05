import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        portfolios: []
    },
    reducers: {
        getPortfoliosReducer: (state, action) => {
            state.portfolios = action.payload;
        }
    }
});

export const { getPortfoliosReducer } = portfolioSlice.actions;

export default portfolioSlice.reducer;