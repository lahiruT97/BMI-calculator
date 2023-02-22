import React from 'react'
import './CalButton.css'
import ShowResult from './ShowResult';

function CalButton(props) {
let BMI ;

  const calculate=(w,h)=>{
      BMI = w/(h*h);
  }
  return (
    <div>
        <div className='btn'>
            <button onClick={calculate(props.weightData,props.heightData)}>Calculate</button>
            <p>Your BMI is {BMI}</p>
            <ShowResult data={BMI}/>
            
        </div>
    </div>
  )
}

export default CalButton
 