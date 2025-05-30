import { useState,useEffect } from 'react'
import './App.css'
import ThemeBtn from './Components/ThemeBtn.jsx'
import Card from './Components/Card.jsx'
import {ThemeContextProvider} from './Context/Theme.js'

function App() {
  const [themeMode,setThemeMode]=useState('dark');
  // const [lightMode,setLightMode] = useState('light');
  // const [darkMode,setDarkMode] = useState('dark');

  const lightMode = ()=>{
    setThemeMode('dark');
  }
  const darkMode = ()=>{
    setThemeMode('light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light');
    document.querySelector('html').classList.remove('dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

return (
    <>
    
    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">

                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
     </ThemeContextProvider>
    </>
  )
}

export default App
