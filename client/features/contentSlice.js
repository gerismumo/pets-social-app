import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const contentList = createAsyncThunk('content/getContent', 
async(thunkApi) => {

    // const token =  thunkApi.getState().account.loginData.userToken;
  
    try{
        const token = await AsyncStorage.getItem('userToken');
        if(token === '') {
            throw new Error('Token is missing');
        }

        const response = await axios.get(`${config.backendUrl}/testInfo`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
       
        // console.log(response.data)
        //success response
        if(response.data.success) {
            return response.data;
        }else {
            throw response.data;
        }

    }catch(error) {
        console.log('(erroryy',error);
        throw error;
    }
})


const contentSlice = createSlice({
    initialState: {
        error: '',
        message: '',
        loading: false,
        success: '',
        data:[],
    },
    name: 'content',
    extraReducers: (builder) => {
        builder.addCase(contentList.pending, (state, action) => {
            state.loading = true;
            state.error = '';
            state.message = '';
            state.data = [];
        })
        builder.addCase(contentList.fulfilled , (state, action) => {
            console.log('fulfilled', action.payload)
            state.loading = false;
            state.error = '';
            state.success = action.payload.success;
            state.data = action.payload.contentData;
        })
        builder.addCase(contentList.rejected , (state, action) => {
            console.log('reject', action)
            state.loading = false;
            state.error = action.payload.message;
            state.message = '';
            state.data = [];
        })
    }
});


export default contentSlice.reducer;