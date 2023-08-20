import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './component/header'
// import {Display} from "./component/display"
// import {Register } from './component/team_register'
// import { Home } from './component/home'
// import Login from './component/login'
// import {Adder}  from "./component/adder"
// import Mark from "./component/mark"
import Control from './component/control'
import Display from './component/display'

export const App = () => {
   const [score,setScore] = useState(0);
   const [balls,setBalls] = useState(0);
   const [wickets,setWicket] = useState(0);
   const [timeline,setTimeline] = useState([]);


   useEffect(() =>{
    if(wickets === 10)
     alert(`Inning Done!`)
    },[wickets])

    const timelineRef = useRef()

     return (
    // <div>
    <BrowserRouter>
      <Header />
      <main>
        <div className='inner'>
        <p>
         Score:{score}/{wickets}
        </p>
        <p>
          Overs:{`${Math.floor(balls/6)}.${balls%6}`}
        </p>
       <div className='timeline' ref={timelineRef}>
        {
          timeline.map(item => <div className='timeline-item' >{item} </div>)
        }
       </div>
        </div>
      </main>
      {/* <Display /> */}
      <Control 
        setScore = {setScore}
        setBalls={setBalls}
        setWicket={setWicket}
        setTimeline={setTimeline}
      />
      {/* <Control /> */}
      {/* <Routes>
        
        <Route path='/home' element = {<Home />} />

        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/display" element = {<Display/>} />

      </Routes> */}
      </BrowserRouter>
     );
}

export default App

