import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        fetching: false,
        quote: "Lorem Ipsum",
        author: "Autor"
    },
    reducers: {
        fetchData: (state) => {
            state.fetching = true
        },
        receivedData: (state, action) => {
            state.fetching = false
            state.quote = action.quote
            state.author = action.author
        }
    }
});

export const { fetchData, receivedData } = dataSlice.actions;
export default dataSlice;