import React from 'react'
import ICard from './Icard.jsx'


function Gallery() {
    const students =
        {name: "Ayush", roll: "77", branch: "IT", section: "C"}
    
  return (
    <div>
        {/* <ICard name="Ayush" roll="77" branch="IT" section="C"/>
        <ICard name="Faiz" roll="78" branch="IT" section="C"/>
        <ICard name="Dean" roll="79" branch="IT" section="C"/>
        <ICard name="Sam" roll="80" branch="IT" section="C"/> */}
        <ICard data={students} />
    </div>
    
  )
}

export default Gallery