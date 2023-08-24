import React, { useState } from 'react'
import Wrapper from "./style"

const Control = ({setScore,setBalls,setWicket,setTimeline}) => {
  const [tl,setTl] = useState([])
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
        setTl(tl => [...tl,parseInt(value)])
        console.log(tl)
        break;

      case "OUT" :
        setBalls(balls =>balls + 1)
        setWicket(wickets => wickets + 1)
        setTimeline(timeline => [...timeline,value])
        break;

      case "LegBye":
        setBalls(balls => balls + 1)
        setTimeline(timeline => [...timeline,"LB"])
        break;
      
      case "Bye":
        setBalls(balls => balls + 1)
        setTimeline(timeline => [...timeline,"B"])
        break;
      
      case "Penalty":
        setScore(score => score + 5)
        setBalls(balls => balls + 1)
        setTimeline(timeline => [...timeline,"P"])
        break;

      case "NoBall":
        setScore(score => score + 1)
        setTimeline(timeline => [...timeline,"NB"])
        break;
      
      case "Wide":
        setScore(score => score + 1)
        setTimeline(timeline => [...timeline,"WD"])
        break;
        
      case "Undo":
        if(tl[tl.length - 1] === 4){
          setScore(score => score -  4)
          
          // setTimeline(timeline => [...timeline,...timeline.map(timeline.pop())])
          setBalls(balls => balls - 1)
          tl.pop()
          // console.log(timeline.map)
        }
        break;

      default: break;
    }
  }

  return (
    <Wrapper>
    <div className='inner'>
     
      <input type="button" value={"LegBye"} onClick={updateScore}/>
      <input type="button" value={"Bye"} onClick={updateScore}/>
      <input type="button" value={"Penalty"} onClick={updateScore}/>
      <input type="button" value={"Undo"} onClick={updateScore}/>
       <input type="button"  value={9} onClick={updateScore}/>
      <input type="button" value={9} onClick={updateScore}/>
      <input type="button" value={5} onClick={updateScore}/>
      
      <input type="button" value={"NoBall"} onClick={updateScore}/>
      <input type="button" value={3} onClick={updateScore}/>
      <input type="button" value={4} onClick={updateScore}/>
      <input type="button" value={6} onClick={updateScore}/>
      <input type="button" value={"Wide"} onClick={updateScore}/>
      <input type="button" value={0} onClick={updateScore}/>
      <input type="button" value={1} onClick={updateScore}/>
      <input type="button" value={2} onClick={updateScore}/>
      <input type="button" value={"OUT"} onClick={updateScore}/>
    </div>
    </Wrapper>
  )
}

export default Control