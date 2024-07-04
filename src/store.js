import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from './FoodSlice'
import authReducer from './authSlice'
import authSlice from "./authSlice";

const store  = configureStore({
  reducer:{
    foodslice:FoodReducer,
    auth:authReducer

  }
});
export default store;