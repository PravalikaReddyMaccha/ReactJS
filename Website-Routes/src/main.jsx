import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from  './Components/NavBar';
import About from  './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Github,{githubInfoLoader} from './Components/Github';
import User from './Components/User';
import Layout from './Layout';
import { useParams } from 'react'


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user' element={<User />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
  //  <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
