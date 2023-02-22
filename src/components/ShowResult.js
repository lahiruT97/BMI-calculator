import React from 'react'

function ShowResult(props) {
  const Result = (x) =>{
    if(x < 18.5){
      return 'Underweight';
    }
    else if(x > 18.5 && x < 24.9){
      return 'Healthy Weight';
    }
    else if(x > 25.0  && x < 25.0 ){
      return 'Overweight';
    }
    else if(x > 30){
      return 'Obesity';
    }
  }

  return (
    <div>
      <h1>hy there, you are {Result(props.data)}</h1>
    </div>
  )
}

export default ShowResult

