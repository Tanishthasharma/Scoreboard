import React, { useRef, useState } from 'react'
import Wrapper from "./style"
import Control from '../control'
// import { BrowserRouter } from 'react-router-dom';
// import Control from  './component/control/index.js'
 

export const Display = ({score,wickets,timeline,balls}) => {
    // const[score,setScore] = useState(0);

    const timelineRef = useRef()
  return (
   
    <Wrapper>
      <main>
        <div className='innerRight'>
        <h1>Team 1</h1>
        </div>
        <div className='inner'>
          
          <p>
            Score : {score}/{wickets}
          </p>
          <p>
            Overs: {`${Math.floor(balls / 6)}.${balls % 6}`}
          </p>
          <div className='timeline' ref={timelineRef}>
            {timeline.map(item => <div className='timeline-item'>{item}</div>)}
          </div>
        </div>
      </main>
    </Wrapper>

  )
}

export default Display
