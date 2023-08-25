
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import {  useState } from 'react';
import './App.css';
import Header from './component/header'
import Register  from './component/register'
import Home  from './component/home'
import Footer from './component/footer';
import Control from './component/control'
import Display from './component/display'
import Login from './component/login';
import Player from './component/player'
import Widepop from './component/widepop'

export const App = () => {
   const [score,setScore] = useState(0);
   const [balls,setBalls] = useState(0);
   const [wickets,setWicket] = useState(0);
   const [timeline,setTimeline] = useState([]);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
   const[overs,setOvers] = useState(0);
   const [team1Name, setTeam1Name] = useState("");
const [team2Name, setTeam2Name] = useState("");


    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
    

    const saveStateToHistory = () => {
      const prevState = {
        score,
        balls,
        wickets,
        timeline: [...timeline],
      };
       
  const historyCopy = [...history];
 historyCopy.push(prevState);
 setHistory(historyCopy);
 setCurrentIndex(historyCopy.length - 1);
      
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
            overs={overs}
            team1Name={team1Name} 
            team2Name={team2Name}
            setScore = {setScore}
            setBalls={setBalls}
            setWicket={setWicket}
            setTimeline={setTimeline}
            
            /><div><Control setScore = {setScore}
            setBalls={setBalls}
            setWicket={setWicket}
            setTimeline={setTimeline}
            openPopupCallback={openPopup} 
            history={history}
            saveStateToHistory={saveStateToHistory}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            score={score}  
            wickets={wickets}
            timeline={timeline}
            balls={balls}
            
            />
            {isPopupOpen && (
              <Widepop handleClose={closePopup} setScore={setScore}>
               </Widepop>
            )}</div></>} />

            
       
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path='/player'  element = { <Player overs={overs} setOvers={setOvers}
                                                              team1Name={team1Name} team2Name={team2Name}
                                                                setTeam1Name={setTeam1Name}  setTeam2Name={setTeam2Name}
                                                              />} />
        
       </Routes>  
       <Footer/>
      </BrowserRouter>
     );
}  

export default App

