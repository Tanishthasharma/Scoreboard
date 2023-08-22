import React , {useState , useEffect} from 'react'
import { BrowserRouter ,Router,Routes, Route, Link } from 'react-router-dom';
import {Header} from "./component/header"
// import {Display} from "./component/display"
// import {Register } from './component/team_register'
// import { Home } from './component/home'
// import Login from './component/login'
// import {Adder}  from "./component/adder"
// import Mark from "./component/mark"
// import { BrowserRouter } from 'react-router-dom'
import './App.css';
// import { BrowserRouter , Router,Routes, Route, Link } from 'react-router-dom';
// import Header from './component/header'
import {Register } from './component/register'
import { Home } from './component/home'
// import Login from './component/login'
// import {Adder}  from "./component/adder"
// import Mark from "./component/mark"
import Control from './component/control'
import {Display} from './component/display'
import Login from './component/login';
import Enter from './component/enter' 

export const App = () => {
   const [score,setScore] = useState(0);
   const [balls,setBalls] = useState(0);
   const [wickets,setWicket] = useState(0);
   const [timeline,setTimeline] = useState([]);


   useEffect(() =>{
    if(wickets === 10)
     alert(`Inning Done!`)
    },[wickets])

    // const timelineRef = useRef()

     return (
    
    <BrowserRouter>
    {/* <Header />
   <Display  score={score}
            wickets={wickets}
            timeline={timeline}
            balls={balls}
            />
      <Control 
        setScore = {setScore}
        setBalls={setBalls}
        setWicket={setWicket}
        setTimeline={setTimeline}
      /> */}
     
      <Routes>
        
        <Route path='/' element = {<Home />} />
        <Route path='/header' element ={ <Header />} />
        
         <Route path='/display' element={<Display  
         score={score}  
         wickets={wickets}
            timeline={timeline}
            balls={balls}
            />} />
            {/* <Route path='/display' element = {<Display/>} /> */}
        <Route path='/control' element = {<Control 
        setScore = {setScore}
        setBalls={setBalls}
        setWicket={setWicket}
        setTimeline={setTimeline}
      />} />
       <Route path='/enter' element = {<Enter />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
       </Routes>  
      </BrowserRouter>
     );
}

export default App

