import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: {
        color: "white"
    },
    reducers: {
        changeColor: (state, params) => {
            console.log(params)
            state.color = params.payload;
        }
    }
})

export const { changeColor } = colorSlice.actions;
export default colorSlice;