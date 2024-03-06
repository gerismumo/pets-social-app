import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/accountSlice";

const store = configureStore({
    reducer: {
        login: accountReducer,
    }
})

export default store;