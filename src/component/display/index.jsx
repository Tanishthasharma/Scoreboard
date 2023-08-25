import React, { useRef, useState,useEffect } from 'react'
import Wrapper from "./style"

 

export const Display = ({score,wickets,timeline,balls,team1Name,team2Name}) => {
   
  const timelineRef = useRef()

  const [currentTeam, setCurrentTeam] = useState(team1Name);
  
 
  if (wickets === 10 && currentTeam === team1Name) {
    
    if (window.confirm(`Wickets are 10 for ${team1Name}. Do you want to switch to ${team2Name}?`)) {
      setCurrentTeam(team2Name);
    }
  }

  

  return (
   
    <Wrapper>
      <main>
        <div className='innerRight'>
        <h1>{currentTeam}</h1>
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
