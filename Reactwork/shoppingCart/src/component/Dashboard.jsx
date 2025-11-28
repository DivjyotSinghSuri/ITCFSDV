import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[counter,setCounter]=useState(10);
  const[pointer,setPointer]=useState(50);
  
  useEffect(()=>{
   console.log(counter);
   console.log(pointer);
  },[counter])
  return (
    <div>

      <div>
        <h2>Counter value={counter}</h2>
        <h2>Pointer value={pointer}</h2>
      </div>
      <button onClick={()=>setCounter(counter+20)}>Counter</button>
      <button onClick={()=>setPointer(pointer+1)}>Pointer</button>
    
    </div>
  )
}

export default Dashboard