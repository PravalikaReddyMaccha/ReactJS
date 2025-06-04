import {createSlice,nanoid} from '@reduxjs/toolkit';
const initialState = {
    todos: []
}

export const todoSlice = createSlice({

   name : 'todo',
   initialState,
   reducers:{
    addTodo:(state,action)=>{
        const todo={
            id : nanoid(),
            text:action.payload,
            isCompleted : false
        }
        state.todos.push(todo)
        
    },
    removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
    },
    editTodo :(state,action)=>{
        state.todos = state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.newText}:todo)
    },
     toggleTodo :(state,action)=>{
        state.todos = state.todos.map((todo)=>todo.id===action.payload.id?{...todo,isCompleted:action.payload.newState}:todo)
    }
     
   },
 

})

export const {addTodo,editTodo,removeTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer