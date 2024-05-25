import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        isFilterOpen: false,
    },
    reducers: {

        filterOpen: (state, action) => {
            state.isFilterOpen =!state.isFilterOpen;
            console.log('logged');
        }
    }
})

export const {  filterOpen } = filterSlice.actions;
export default filterSlice.reducer;