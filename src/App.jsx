import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './component/header'
import Register  from './component/register'
import Home  from './component/home'
import Footer from './component/footer';
import Control from './component/control'
import Display from './component/display'
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

     return (

    <BrowserRouter>
    <Header />
    <Routes>
        
        <Route path='/' element = {<Home />} />
       
        
         <Route path='/display' element={<Display  score={score}  
         wickets={wickets}
            timeline={timeline}
            balls={balls}
            />} />
            
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
        <Footer/>
      </BrowserRouter>
     );
}

export default App

