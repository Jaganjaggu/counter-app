import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./counterSlice";

export const store = configureStore({
    reducer:{
        // Reducers should be key-value pair
        counter:couterReducer
    }
})  