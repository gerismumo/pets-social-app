import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('login/loginUse', 
(data, thunkApi) => {
    console.log('data', data);
    // console.log('data', thunkApi);
})

const loginSlice = createSlice({
    initialState: {

    },
    name: 'login',
})

export default loginSlice.reducer;