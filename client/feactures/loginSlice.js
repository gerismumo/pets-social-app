import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';

export const loginUser = createAsyncThunk('login/loginUser', 
async(data, thunkApi) => {
    console.log('login data',data);
    const url = `${config.backendUrl}/signInUser`;
    console.log(url);
    try{
        const response = await axios.post(url, data);
        console.log(response.data);
    }catch(error) {
        throw error;
    }
})

const loginSlice = createSlice({
    initialState: {

    },
    name: 'login',
})

export default loginSlice.reducer;