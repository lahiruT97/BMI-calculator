import React, { useState } from 'react'
import CalButton from './CalButton';
import './InputBox.css'

function TextBox(props) {
  const [details,setDetails]  = useState({
    weight: "",
    height: "",
  });
  

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) =>{
      return {...prev, [name]:value};
    });
  };
console.log(details)

  return (
    <div>
        <div className='row'>
          <p>{props.text1}</p>
          <input 
            type="number"
            name='weight'
            onChange={handleChange}
            />
        </div>
        <div className='row'>
          <p>{props.text2}</p>
          <input 
            type="number"
            name='height'
            onChange={handleChange}
            />
        </div>
        <CalButton weightData={details.weight} heightData={details.height} />
    </div>
  )
}

export default TextBox
