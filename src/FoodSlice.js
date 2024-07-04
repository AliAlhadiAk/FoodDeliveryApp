import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { food_list } from "./Components/assets/assets";
import { SiAxios } from "react-icons/si";

const initialState = {
  food: food_list,
  itemCount: new Array(food_list.length).fill(0),
  cartItem:[
    {id:0,
      count:undefined
    }
  ] // Initialize itemCount array with zeros
};

export const FoodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    incrementItemCount(state, action) {
      const { id } = action.payload;
      if (state.itemCount[id] === undefined) {
        state.itemCount[id] = 1;
      } else {
        state.itemCount[id] += 1;
      }
    },
    decrementItemCount(state, action) {
      const { id } = action.payload;
      if (state.itemCount[id] > 0) {
        state.itemCount[id] -= 1;
      }
    },
    setCartItem(state, action) {
      const id = action.payload;
      if (!state.cartItem[id]) {
        state.cartItem.push({ id, count: 1 });
      } else {
        state.cartItem[id].count += 1;
      }
    },
    
  },

});

const getOrderAdmin = createAsyncThunk('get/orders', async () => {
  const response = await fetch(" ")
})

export const { incrementItemCount, decrementItemCount } = FoodSlice.actions;
export default FoodSlice.reducer;
