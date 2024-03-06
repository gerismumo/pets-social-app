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
    }catch(error) {
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

    },
    name: 'login',
})

export default accountSlice.reducer;