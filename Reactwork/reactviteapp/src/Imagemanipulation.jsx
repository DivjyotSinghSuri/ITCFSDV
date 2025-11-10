import React, { useState } from "react";
import doggy from "./doggy.jpeg";

function ImageManipulation() {
  const defaultHeight = 200;
  const defaultWidth = 300;
  const defaultColor = { r: 255, g: 255, b: 255 };

  const [dogHeight, setDogHeight] = useState(defaultHeight);
  const [dogWidth, setDogWidth] = useState(defaultWidth);
  const [color, setColor] = useState(defaultColor);
  const [rotation, setRotation] = useState(0);

  function setRandomColor() {
    setColor({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  }

  function Imagerotate() {
    setImgAngle(imgAngle + 30);
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
        minHeight: "100vh",
        transition: "background-color 0.5s ease",
        padding: "20px",
      }}
    >
      <h2>Image Manipulation</h2>

      <div>
        <img
          src={Dog}
          height={DogHeight}
          width={DogWidth}
          alt="Doggy"
          style={{
            border: '2px solid green',
            transform: `rotate(${imgAngle}deg)`,
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
        <button onClick={() => setDogHeight(dogHeight + 50)}>Increase Height</button>
        <button onClick={() => setDogHeight(Math.max(50, dogHeight - 50))}>Decrease Height</button>
        <button onClick={() => setDogWidth(dogWidth + 50)}>Increase Width</button>
        <button onClick={() => setDogWidth(Math.max(50, dogWidth - 50))}>Decrease Width</button>
        <button onClick={setRandomColor}>Change Background Color</button>
        <button onClick={Imagerotate}>Rotate image</button>
      </div>
    </div>
  );
}

export default ImageManipulation;