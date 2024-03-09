import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import config from '../config';

export const loginUser = createAsyncThunk('login/loginUser', 
async(data, thunkApi) => {
    const url = `${config.backendUrl}/signInUser`;
   
    try{
        const response = await axios.post(url, data);
        // console.log('token thunk',thunkApi.getState().account.loginData.userToken);
        if(response.data.success) {
            await AsyncStorage.setItem('userToken', response.data.data);
            
            return thunkApi.fulfillWithValue(response.data);
        }else {
            return thunkApi.rejectWithValue(response.data);
        }
    }catch(error) {
        console.log(error.message);
        throw error;
    }
})

export const SignUpUser = createAsyncThunk('account/signUpUser',
async(data,  thunkApi) => {
    console.log(data);
    try{
        const response = await axios.post(`${config.backendUrl}/signUpUser`, data);
        console.log(response.data);
    }catch(error) {
        throw error;
    }
})

const accountSlice = createSlice({
    initialState: {
        loginData: {
            error: '',
            message: '',
            userToken: '',
            authentication: false,
        },
        signUpData: {
            error: '',
            message: '',
            userToken: '',
            authentication: false,
        }
    },
    name: 'account',
    extraReducers:(builder) => {
            builder.addCase(loginUser.pending, (state, action) => {
                state.loginData.error = '';
                state.loginData.message = '';
            })
            builder.addCase(loginUser.fulfilled, (state, action) => {
                // console.log('login sucess',action.payload),
                state.loginData.error = '';
                state.loginData.message = action.payload.message;
                state.loginData.userToken = action.payload.data;
                state.loginData.authentication = true;
            })
            builder.addCase(loginUser.rejected, (state, action) => {
                // console.log('rejected',action.payload),
                state.loginData.error = action.payload.message;
                state.loginData.message = '';
                state.loginData.authentication = false;
                state.loginData.userToken = ''
            })
        }
    
})

export default accountSlice.reducer;