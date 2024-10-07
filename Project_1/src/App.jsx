import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Intro from './component/Intro'
import Signin from './component/Signin'
import Login from './component/Login'
import Admin from './component/Admin'
import Userdashboard from './usermodule/Userdashboard'
import Browserjob from './usermodule/Browserjob'
import Viewappliedjobs from './usermodule/Viewappliedjobs'
import Updateprofile from './usermodule/Updateprofile'
import Admindashboard from './adminmodule/Admindashboard'
import Fulluserappl from './adminmodule/Fulluserappl'
import Managejob from './adminmodule/Managejob'
import Navuser from './usermodule/Navuser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Routes>
          <Route path='/' element={<Intro />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes> 
        <Routes>
          <Route path='/userdash' element={<Userdashboard />}></Route>
          <Route path='/browser' element={<Browserjob />}></Route>
          <Route path='/viewappjob' element={<Viewappliedjobs />}></Route>
          <Route path='/updateprof' element={<Updateprofile />}></Route>
        </Routes> 
        <Routes>
          <Route path='/admindash' element={<Admindashboard />}></Route>
          <Route path='/fulluser' element={<Fulluserappl />}></Route>
          <Route path='/manjob' element={<Managejob />}></Route>
        </Routes> 

       
    </>
  )
}

export default App
