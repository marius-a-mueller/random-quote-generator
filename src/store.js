import { configureStore } from '@reduxjs/toolkit';
import colorSlice from './state/color/colorSlice';
import dataSlice from './state/data/dataSlice';

const store = configureStore({
    reducer: {
        color: colorSlice.reducer,
        data: dataSlice.reducer
    }
});

export default store;