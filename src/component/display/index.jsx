import React, { useRef, useState } from 'react'
import Wrapper from "./style"

 

export const Display = ({score,wickets,timeline,balls}) => {
   
  const timelineRef = useRef()
  return (
   
    <Wrapper>
   <main>
    <div className='inner'>
    <p>
        Score : {score}/{wickets}
    </p>
    <p>
        Overs: {`${Math.floor(balls/6)}.${balls%6}`} 
    </p>
    <div className='timeline' ref={timelineRef}  >
      {
      timeline.map(item => <div className='timeline-item'>{item}</div>)
    }
     </div>
    </div>
   </main>
   </Wrapper>

  )
}

export default Display
