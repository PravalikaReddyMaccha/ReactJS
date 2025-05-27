import React from 'react'
import {useState} from 'react'

function App() {

 let [color,setColor] = useState("grey");
 
return (
     <>
       <div className=" h-screen duration-200"
          style={{backgroundColor: color}}
       >

       </div>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

  <button  onClick={() => setColor("Green")} type="button" 
  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
    Green
  </button>
  <button onClick={() => setColor("Red")} type="button" 
  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red
  </button>
  <button onClick={() => setColor("Yellow")} type="button" 
  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow
  </button>
  <button onClick={() => setColor("Purple")} type="button" 
  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple
  </button>
  
</div>



     </>
  )
  
}
export default App
