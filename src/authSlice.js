import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CgLogOut } from "react-icons/cg";
import axios from "axios";


const authSlice = createSlice({
    name:"auth",
    initialState:{isloggedIn:true,role:"USER"},
    reducers:{
        login(state){
            state.isloggedIn=true
        },
        logout(state){
            state.isloggedIn=false
        },
        changeRole(state,action){
            const role = action.payload
            state.role = role;
        }
    }
});
export const Login = createAsyncThunk('login/post',async () => {
  const response = await axios.post("")
})
export const authActions = authSlice.actions;
export default authSlice.reducer