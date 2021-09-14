import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todo: []
}

export const todoSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const {lastID} = action.payload;
            const {inputValue} = action.payload;
            state.todo.push(
                {
                  id:lastID,
                  title:inputValue,
                  completed:false
                }
            )
        },
        delTodo: (state,action) =>{
          const {index} = action.payload;
          state.todo.splice(index,1);
        },
        changeTodo: (state,action) => {
          const {index} = action.payload;
          const {completed} = action.payload;
          state.todo[index].completed = !completed;
        }
    }
});

export const { addTodo,delTodo,changeTodo } = todoSlice.actions

export default todoSlice.reducer