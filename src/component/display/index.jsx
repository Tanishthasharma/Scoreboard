import React, { useRef, useState,useEffect } from 'react'
import Wrapper from "./style"
import { useNavigate } from 'react-router-dom';

 

 const Display = ({score,wickets,timeline,balls,team1Name,team2Name,setBalls,setScore,setWicket,setTimeline}) => {
   
  const timelineRef = useRef()

  const [currentTeam, setCurrentTeam] = useState(team1Name);

  const navigate = useNavigate();
  

  useEffect(() => {
    
    localStorage.removeItem(`${team1Name}_score`);
    localStorage.removeItem(`${team2Name}_score`);
  }, [team1Name, team2Name]);



  useEffect(() => {
    if (wickets === 10 && currentTeam === team1Name) {
      if (window.confirm('Inning Done')) {
        setCurrentTeam(team2Name);
        
        const team1Score = localStorage.getItem(`${team1Name}_score`);
        localStorage.setItem(`${team1Name}_score`, parseInt(team1Score) + score);
        console.log(`${team1Name} Score: ${localStorage.getItem(`${team1Name}_score`)}`);
        
        setBalls(0);
        setScore(0);
        setWicket(0);
        setTimeline([]);
      }
    }
  }, [wickets, currentTeam, team1Name, team2Name, score, setScore, setWicket, setTimeline]);

  useEffect(() => {
    if (wickets === 10 && currentTeam === team2Name) {
      if (window.confirm('Inning Done')) {
       
        const team2Score = localStorage.getItem(`${team2Name}_score`);
        localStorage.setItem(`${team2Name}_score`, parseInt(team2Score) + score);
        console.log(`${team2Name} Score: ${localStorage.getItem(`${team2Name}_score`)}`);
       
        const matchResult = getMatchResult();
        console.log(`Match Result: ${matchResult}`);
        navigate('/player');
      }
    }
  }, [wickets, currentTeam, team1Name, team2Name, score, setScore, setWicket, setTimeline]);

 
  useEffect(() => {
    if (!localStorage.getItem(`${team1Name}_score`)) {
      localStorage.setItem(`${team1Name}_score`, '0');
    }
    if (!localStorage.getItem(`${team2Name}_score`)) {
      localStorage.setItem(`${team2Name}_score`, '0');
    }
  }, [team1Name, team2Name]);

  const getMatchResult = () => {
    const team1Score = parseInt(localStorage.getItem(`${team1Name}_score`));
    const team2Score = parseInt(localStorage.getItem(`${team2Name}_score`));

       if (team1Score > team2Score) {
      return `${team1Name} wins`;
      } else if (team2Score > team1Score) {
      return `${team2Name} wins`;
       } 
      else {
      return "It's a tie" ;
      }
  };
 

 
 
  
  const matchResult = getMatchResult();

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
