import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'

function App() {
  

  return (
    <div>
      <h2>WElcome to react and vite App</h2>
      <h3>
        <Profile/>
      </h3>
    </div>
  )
}

export default App