import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action) => {
            state.todos.push(action.payload)
        },
        togleTodoComplited: (state,action)=>{
            const todo = state.todos.find(todo=> todo.id == action.payload)
            todo.complited = !todo.complited
        },
        deleteTodo: (state,action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo, togleTodoComplited, deleteTodo} = todoSlice.actions
export default todoSlice.reducer