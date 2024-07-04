import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: (state,action) => {
     const todo = {
        id:nanoid(),
        text:action.payload,
     }
     state.todos.push(todo);
    },
    removeTodo: (state,action) => {
        state.todos.filter((todo) => action.payload !== todo.id)
    }
  },
  extraReducers : (builder) => {
    builder.addCase(getProducts.fulfilled,(state,action) => {
      state.todos = action.payload
    })

    .addCase(getProducts.pending,(state,action) => {
      state.todos = action.payload
    })
    .addCase(getProducts.rejected,(state,action) => {
      state.todos = action.payload
    })
  }
})

const getProducts = createAsyncThunk('get/products', async () => {
  const data  = await fetch();
})
export const  {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
