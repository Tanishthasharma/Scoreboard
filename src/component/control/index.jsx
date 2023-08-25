import React, { useState ,useEffect,useRef } from 'react'
import Wrapper from "./style"



const Control = ({setScore,setBalls,setWicket,setTimeline,openPopupCallback,history,saveStateToHistory,currentIndex,setCurrentIndex, score,
  balls,
  wickets,
  timeline,}) => {
 
    const prevHistoryIndexRef = useRef(currentIndex);

  useEffect(() => {
    prevHistoryIndexRef.current = currentIndex;
  }, [currentIndex]);

  const handleUndo = () => {
    if (currentIndex >= 0 ) {
      
      const prevState = history[prevHistoryIndexRef.current];
      if (prevState) {
        setScore(prevState.score);
        setBalls(prevState.balls);
        setWicket(prevState.wickets);
        setTimeline([...prevState.timeline]);
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

 
  
  

  const updateScore = (e) =>{
    const value = e.target.value 
    
    

    switch(value){
      case "0":
       
          setBalls(balls =>balls + 1)
         setTimeline(timeline => [...timeline,value])
        
        break;
      case "1": 
      case "2":
      case "3":
      case "4":
      case "5":
      case "6": 
       
        setScore(score => score + parseInt(value))
        setBalls(balls =>balls + 1)
       setTimeline(timeline => [...timeline,value])
      
     
     
       break;
       case "Wide":
       
          setScore(score => score + 1)
          setTimeline(timeline => [...timeline, value])
        
        break;
       case "OUT" :
       
          setBalls(balls =>balls + 1)
        setWicket(wickets => wickets + 1)
        setTimeline(timeline => [...timeline,value])
      
        break;
     case "NoBall" :
     
        openPopupCallback() ;
      setScore(score => score + 1)
      setTimeline(timeline => [...timeline, value])
     
        break;
       case  "LB+" :
        
          setTimeline(timeline => [...timeline, value])
         break;
         
         case  "Bye" :
        
         setTimeline(timeline => [...timeline, value])
        break;

        case "Undo":
          
     handleUndo();
          break;
        default:
          break; 

          case "PENALTY" :
            openPopupCallback() ;
            break;
    }
    
    
    if (value !== "Undo") {
      saveStateToHistory();
    }

  }

  return (
    <Wrapper>
    <div className='inner'>
     
      <input type="button" value={5} onClick={updateScore}/>
      
      <input type="button" value={"PENALTY"} onClick={updateScore}/>
      <input type="button" value={"Undo"} onClick={updateScore} disabled={timeline.length < 1}/>
       
      <input type="button" value={"Bye"} onClick={updateScore}/>
      <input type="button" value={3} onClick={updateScore}/>
      
      <input type="button" value={2} onClick={updateScore}/>
      <input type="button" value={4} onClick={updateScore}/>
      <input type="button" value={"Wide"} onClick={updateScore}/>
      <input type="button" value={0} onClick={updateScore}/>
      <input type="button" value={1} onClick={updateScore}/>
      <input type="button" value={6} onClick={updateScore}/>
      <input type="button" value={"LB+"} onClick={updateScore}/>
      <input type="button" value={"NoBall"} onClick={updateScore}/>
      <input type="button" value={"OUT"} onClick={updateScore}/>
     
    </div>
    </Wrapper>
  )
}


export default Control
