import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const loginUser = createAsyncThunk('login/loginUser', 
async(data, thunkApi) => {
    console.log('login data',data);
    const url = `${config.backendUrl}/signInUser`;
   
    try{
        const response = await axios.post(url, data);
        console.log(response.data);
        if(response.data.success) {
            return thunkApi.fulfillWithValue(response.data.message);
        }else {
            return thunkApi.rejectWithValue(response.data.message);
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
            data: '',
            authentication: false,
        },
        signUpData: {
            error: '',
            message: '',
            data: '',
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
                console.log(action.payload),
                state.loginData.error = '';
                state.loginData.message = action.payload;
                state.loginData.authentication = true;
            })
            builder.addCase(loginUser.rejected, (state, action) => {
                console.log('rejected',action.payload),
                state.loginData.error = action.payload;
                state.loginData.message = '';
                state.loginData.authentication = false;
            })
        }
    
})

export default accountSlice.reducer;