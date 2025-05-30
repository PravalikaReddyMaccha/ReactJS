import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import './App.css'

function App() {

  return (
  <>
    <UserContextProvider>
      <Login/>
      <br/>
      <br/>
      <Profile/>
      {/* <h2 className="bg-red-500">Iam pravalika</h2> */}
    </UserContextProvider>
    </>
  )
}

export default App
