import { useState } from 'react'
import UserContext from './Context/UserContext';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import './App.css'

function App() {
   const [user,setUser] = useState(null);
  
  return (
  <>
    <UserContext.Provider value = {{user,setUser}}>
      <Login/>
      <br/>
      <br/>
      <Profile/>
      {/* <h2 className="bg-red-500">Iam pravalika</h2> */}
    </UserContext.Provider>
    </>
  )
}

export default App
