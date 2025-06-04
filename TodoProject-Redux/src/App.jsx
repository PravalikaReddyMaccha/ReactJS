import './App.css'
import AddToDo from './Components/AddTodo.jsx'
import Todo from './Components/Todo.jsx'
function App() {
  
  return (
    <>
     <div className="bg-[#172842] min-h-screen p-10">
        <AddToDo/>
        <Todo/>
     </div>
    
    </>
  )
}

export default App
