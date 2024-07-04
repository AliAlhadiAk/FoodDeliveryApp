import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts:[],
  status:'',
  error:null
}
const postsSlice = createSlice({
  name:'posts',
  initialState,
  reducers:{
    postsAdded:
  }
}) 
