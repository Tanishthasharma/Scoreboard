import React, { useState } from 'react'
// import {useNavigate} from 'react-router' ; 
// import {useNavigate} from 'react-router-dom';

export const Adder = () => {
const[score,setScore] = useState(0);
// const navigate = useNavigate()

 const add1 = () =>{
  setScore(score+ 1)
 }

//  navigate("/display")
  return (
    <div className='run'>
      {
     <input type='button' value="1" onClick={add1} />
    }
    </div>
  )
}

export default Adder
