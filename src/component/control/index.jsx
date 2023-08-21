import React from 'react'
import Wrapper from "./style"

const Control = ({setScore,setBalls,setWicket,setTimeline}) => {

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
       case "OUT" :
        setBalls(balls =>balls + 1)
        setWicket(wickets => wickets + 1)
        setTimeline(timeline => [...timeline,value])
        break;
    }
  }

  return (
    <Wrapper>
    <div className='inner'>
      <input type="button"  value={9} onClick={updateScore}/>
      <input type="button" value={9} onClick={updateScore}/>
      <input type="button" value={9} onClick={updateScore}/>
      <input type="button" value={"UNDO"} onClick={updateScore}/>
      <input type="button" value={5} onClick={updateScore}/>
      <input type="button" value={"LegBye"} onClick={updateScore}/>
      <input type="button" value={"Bye"} onClick={updateScore}/>
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
