
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './component/header'
import Register  from './component/register'
import Home  from './component/home'
import Footer from './component/footer';
import Control from './component/control'
import Display from './component/display'
import Login from './component/login';
import Enter from './component/enter' 
import Player from './component/player'
import { useEffect, useState } from 'react';
import Widepop from './component/widepop'

export const App = () => {
   const [score,setScore] = useState(0);
   const [balls,setBalls] = useState(0);
   const [wickets,setWicket] = useState(0);
   const [timeline,setTimeline] = useState([]);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [overs , setOvers] = useState(0);
    
   
   
   useEffect(() =>{
    if(wickets === 10 )
     {alert(`Inning Done!`)
      setWicket(wickets => 0)
      setScore(score => 0)
      setBalls(balls => 0 )
    }
    },[wickets])

    
     
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
    


     return (

    <BrowserRouter>
    <Header />
    <Routes>
        
        <Route path='/' element = {<Home />} />
       
         
         <Route path='/display' element={<><Display  score={score}  
         wickets={wickets}
            timeline={timeline}
            balls={balls}
            /><div><Control setScore = {setScore}
            setBalls={setBalls}
            setWicket={setWicket}
            setTimeline={setTimeline}
            openPopupCallback={openPopup} 
            />
            {isPopupOpen && (
              <Widepop handleClose={closePopup} setScore={setScore}>
               
              </Widepop>
            )}</div></>} />

            
        
            
       <Route path='/enter' element = {<Enter />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path='/player'  element = { <Player  setOvers={setOvers}/>} />
        
         
       </Routes>  
       
       
        <Footer/>
      </BrowserRouter>
     );
}  

export default App

