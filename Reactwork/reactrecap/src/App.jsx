import { useState } from 'react'
import './App.css'
import Gallery from './component/Gallery.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>ABES Engineering College</h2>
      <Gallery />
    </>
  )
}

export default App