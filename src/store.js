import { configureStore, applyMiddleware} from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import asyncDataReducer from './reducers/asyncDataReducer';

const store = configureStore(asyncDataReducer, applyMiddleware(thunk));

export default store;