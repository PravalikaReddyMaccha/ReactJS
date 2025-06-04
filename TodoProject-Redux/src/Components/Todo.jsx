import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/TodoSlice.js'
import TodoItem from './TodoItem.jsx'
function Todo() {

    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch() 
   

  return (
    <>
       
       <ul className="list-none ">
         {todos.map((todo)=>(
           
            <TodoItem key = {todo.id} todo = {todo} dispatch = {dispatch}/>

         


         ))}
          
       </ul>
    
    </>
  )
}

export default Todo;

        
            