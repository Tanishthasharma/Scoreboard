import React from 'react'
import { useState } from 'react';
// import { Adder}   from './component/adder'
import {Wrapper} from './style'

export const Display = () => {
    const[score, setScore ] = useState(0);
    const[wicket, setWickets ] = useState(0);
    const [past, setPast] = useState([]);
    const [present, setPresent] = useState(null);

    const add0 = () =>{
      setScore(score + 0)
     }
     const add1 = () =>{
      setScore(score + 1)
     }
     const add2 = () =>{
      setScore(score + 2)
     }
     const add3 = () =>{
      setScore(score + 3)
     }
     const add4 = () =>{
      setScore(score + 4)
     }
     const add6 = () =>{
      setScore(score + 6)
     }
      
    //  const undo = () =>{
    //   if(past.length == 0) return;

    //   const newPast = [...past];
    //   const newPresent = newPast.pop();

    //   setPast(newPast);
    //   setPresent(newPresent);
    //  }


  return (
    <>
      {
    <Wrapper>
        <h1>{score}/{wicket}</h1>
      <h2>9.8 overs</h2>
      <div className='run'>
        {
        <div>
            <input type='button' value="0" onClick={add0} />
              <input type='button' value="1" onClick={add1} />
               <input type='button' value="2" onClick={add2} />
               <input type='button' value="3" onClick={add3} />
              <input type='button' value="4" onClick={add4} />
            <input type='button' value="6" onClick={add6} />
            <input type='button' value="Wide"  />
              <input type='button' value="No Ball"  />
            <input type='button' value="Out"  />
            <input type='button' value="Undo"  />
      </div>
        }
      </div> 
    </Wrapper>
    }
    </>
  )
}

export default Display
