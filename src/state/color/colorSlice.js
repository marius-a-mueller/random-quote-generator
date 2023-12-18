import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: "color",
    initialState: {
        color: "orange"
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = action.color;
        }
    }
})

export const { changeColor } = colorSlice.actions;
export default colorSlice;