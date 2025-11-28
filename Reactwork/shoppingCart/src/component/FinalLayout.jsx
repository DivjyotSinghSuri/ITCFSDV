import React from 'react'
import { Link } from 'react-router-dom'
function FinalLayout({cartdata}) {
  return (
    <div>

      <nav style={{backgroundColor:'#db7a18', height:'300px', width:'500px', border:'2px solid red', margin:'100px',paddingTop:'100px', paddingLeft:'100px'}}>
    <Link style={{fontSize:'20px',color:'white'}} to='/login'>Login</Link>
    <Link style={{fontSize:'20px',color:'white', marginLeft:'150px'}} to='/register'>Registration</Link>

      </nav>
        
    </div>

  )
}

export default FinalLayout