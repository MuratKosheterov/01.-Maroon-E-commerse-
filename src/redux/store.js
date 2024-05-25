import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./slices/navbarSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        navbarOpen: navbarSlice,
        cartReducer: cartSlice,
        filterReducer: filterSlice
    },
})