import React, { useState } from 'react'
// import {useNavigate} from 'react-router' ; 
// import {useNavigate} from 'react-router-dom';

export const Add = ({run}) => {
const[score,setScore] = useState(0);
// const navigate = useNavigate()
const handleButtonClick = (runValue) => {
  // Call the Add function with the specified run value
  Add({ run: runValue });
};

//  const add1 = () =>{
//   setScore(score+ 1)
//  }

  
      switch (run){
        case 0:
          return setScore(score + run);
        case 1:
          return setScore(score + run);
        case 2:
          return setScore(score + run);
        case 3:
          return setScore(score + run);
        case 4:
          return setScore(score + run);
        case 6:
          return setScore(score + run);  
        default:
          return score;
      }

  

//  navigate("/display")
  return (
    <h1>Score : {score}</h1>
    // <div className='run'>
    //   {
    //  <input type='button' value="1" onClick={add1} />
    // }
    // </div>
  )
}

// export default Add;
