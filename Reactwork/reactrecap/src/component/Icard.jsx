import React from 'react'
import './ICard.css'

function ICard({data}) {
  return (
    <div className = "container">
        <h2>Name : {data.name}</h2>
        <h2>Roll No. : {data.roll}</h2>
        <h2>Branch : {data.branch}</h2>
        <h2>Section : {data.section}</h2>

    </div>
  )
}

export default ICard