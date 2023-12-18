import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        fetching: false,
        quote: "",
        author: ""
    },
    reducers: {
        fetchData: (state) => {
            console.log("fetchData")
            state.fetching = true
        },
        receivedData: (state, params) => {
            console.log(params)
            const { quote, author } = params.payload;
            state.fetching = false
            state.quote = quote
            state.author = author
        }
    }
});

export const { fetchData, receivedData } = dataSlice.actions;
export default dataSlice;