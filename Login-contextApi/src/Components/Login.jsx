import {useState,useContext} from 'react'
import UserContext from '../Context/UserContext.js'
function Login() {
    
     const [userName,setUserName] = useState('');
     const [userPassword,setUserPassword] = useState('');
      const {setUser} = useContext(UserContext);

      const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, userPassword})
    }
  return (
    <>
   
      <h2 className="bg-yellow-600 p-4 text-color-red">Login</h2>
      <br/>
      <div className="flex flex-wrap gap-4 items-center ">
      <input  className ="b-4 border border-gray-500 p-3" type="text" value = {userName}
      
       onChange = {(e)=>setUserName(e.target.value)}
       placeholder = 'UserName'
      
      />
      <input className = "border border-gray-700 p-3" type="password" value = {userPassword}
      
       onChange = {(e)=>setUserPassword(e.target.value)}
       placeholder = 'UserPassword'
      
      />
      </div>
      <br />
      <br />
      <button className = "border border-gray-700 p-3" onClick ={handleSubmit}>Submit</button>
    </>
  )
}

export default Login
