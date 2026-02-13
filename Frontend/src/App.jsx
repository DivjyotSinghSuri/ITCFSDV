import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  async function getServerData(){
    try{
      // alert("i peg ayush")
    setLoader(true)
    const serverData = await fetch('http://localhost:4001/data')
    const jsondata= await serverData.json();
    setData(jsondata);
    }catch(e){
      console.log(e)
    }finally{
      setLoader(false)
    }
  }

  return (
    <>
    <h2>Fetching using Node Server.</h2>
    <button onClick={getServerData}>FetchData</button>
    {loader?(<h2 style={{color:"brown", backgroundcolor:"white"}}>Data is Loading...</h2>):null}
    {JSON.stringify(data)}

  </>
  )
}

export default App
