import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import FinalLayout from './component/FinalLayout'
import Cart from './component/Cart'

function App() {
 const[data,setData]=useState();

  return (
    <>
      {/* <h2>Welcome to Shopping Cart</h2> */}
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login logData={data}/>}></Route>
        <Route path='/register' element={<Registration regData={setData}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<FinalLayout/>} />
      </Routes>
      </BrowserRouter>
      {JSON.stringify(data)}
    </>
  )
}

export default App