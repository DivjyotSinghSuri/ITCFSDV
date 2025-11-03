import React, { useState } from 'react';
import doggy from './component/doggy.jpeg';

function ImageManipulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [Red, setRed]= useState(0);
  const [Green, setGreen]= useState(0);
  const [Blue, setBlue]= useState(0);

  function setColor(){
    setRed[Math.random()*255];
    setGreen[Math.random()*255];
    setBlue[Math.random()*255];

  }


  return (
    <div>
      <h2>Image Manipulation</h2>
      <div>
        <img src={doggy} alt="dog image" height={catHeight} width={200} />
      </div>

      <div>
        <button onClick={() => setCatHeight(catHeight + 20)}>
          Increase Height
        </button>
        <button onClick={() => setCatHeight(catHeight - 10)}>
          Decrease Height
        </button>
        <button onClick={setColor}>Change background color</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
