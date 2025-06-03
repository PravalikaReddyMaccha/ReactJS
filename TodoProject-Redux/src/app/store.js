import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/TodoSlice.js'

const store = configureStore({

    reducer :  todoReducer,
    
})
export default store;