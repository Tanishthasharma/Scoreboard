import React from 'react'
import { useState } from 'react';
import {Wrapper} from './style'
export const Display = () => {
    const[score, setScore ] = useState(0);
    const[wicket, setWickets ] = useState(0);

       

  return (
    <>
    <Wrapper>
        <h1>{score}/{wicket}</h1>
      <h2>9.8 overs</h2>
      </Wrapper>
      
    </>
  )
}

export default Display
