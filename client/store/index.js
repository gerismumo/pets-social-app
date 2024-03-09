import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/accountSlice";
import contentReducer from "../features/contentSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        content: contentReducer,
    }
})

export default store;