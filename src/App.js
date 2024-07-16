import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {
const [height,setHeight] = useState(180);
const [weight,setWeight] = useState(80);

function onWeightChange(event)
{
  setWeight(event.target.value);
}

function onHeightChange(event)
{
  setHeight(event.target.value);
}

const output = useMemo(()=>{
  const calculateHeight = height/100;
  return(weight/(calculateHeight*calculateHeight)).toFixed(1);
},[weight,height])

  return (
    <div className="main">
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          min="20"
          max="200"
          step="1"
          onChange={onWeightChange}
        ></input>

        <p className="slider-output">Height : {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="1"
          max="200"
          onChange={onHeightChange}
        ></input>
      </div>

      <div className="output-section">
        <p>
          Your BMI Is
        </p>
        <p className="output">{output}</p>
      </div>
    </div>
  );
};

export default App;
