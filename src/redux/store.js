import { configureStore } from "@reduxjs/toolkit";
import docSlice from "./docSlice";

export const store=configureStore({
    reducer:{
        // reducers should key-value pair
        doccc:docSlice
    }
})